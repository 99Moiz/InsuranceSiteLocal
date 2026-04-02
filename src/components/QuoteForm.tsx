import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { CheckCircle, Send } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const insuranceTypes = [
  "Workers Compensation",
  "Employer Liability",
  "Group Health",
  "Contractor Insurance",
  "Payroll & Risk Protection",
];

const QuoteForm = () => {
  const [loading, setLoading] = useState(false);
  const [insuranceType, setInsuranceType] = useState("");
  const [form, setForm] = useState({
    fullName: "",
    businessName: "",
    email: "",
    phone: "",
    employees: "",
    message: "",
  });

  const SERVICE_ID = "service_ld4luf5";
  const OWNER_TEMPLATE_ID = "template_u599n45";
  const AUTO_REPLY_TEMPLATE_ID = "template_to1ink4";
  const EMAILJS_PUBLIC_KEY = "VObJv5Vo7rtRxj0yN";

  // ✅ Initialize EmailJS
  useEffect(() => {
    emailjs.init(EMAILJS_PUBLIC_KEY);
  }, []);

  const handleInputChange = (key: keyof typeof form, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!insuranceType) {
      toast.error("Please select an insurance type.");
      return;
    }
    
  if (!form.fullName.trim()) {
    toast.error("Full name is required.");
    return;
  }
  if (form.fullName.length < 2 || form.fullName.length > 100) {
    toast.error("Full name must be between 2 and 100 characters.");
    return;
  }

  
  if (form.businessName.length < 2 || form.businessName.length > 100) {
    toast.error("Business name must be between 2 and 100 characters.");
    return;
  }

  // Regex to check if name contains numbers
  const nameRegex = /^[A-Za-z\s]+$/;
  if (!nameRegex.test(form.fullName)) {
    toast.error("Full name should not contain numbers or special characters.");
    return;
  }

  if (!form.email.trim()) {
    toast.error("Email is required.");
    return;
  }

  if (!form.phone.trim()) {
    toast.error("Phone number is required.");
    return;
  }

    setLoading(true);

    try {
      const ownerPayload = {
  full_name: form.fullName,
  business_name: form.businessName,
  from_email: form.email,
  phone: form.phone,
  employees: form.employees,
  insurance_type: insuranceType,
  message: form.message || "No message provided"
};

      // console.log("Sending owner email payload:", ownerPayload);

      await emailjs.send(SERVICE_ID, OWNER_TEMPLATE_ID, ownerPayload);

      // Auto-Reply Payload (Auto-Reply Template)
      const autoReplyPayload ={
  customer_name: form.fullName,
  customer_email: form.email, // must match "To Email" in template
  insurance_type: insuranceType
};

  

      await emailjs.send(SERVICE_ID, AUTO_REPLY_TEMPLATE_ID, autoReplyPayload);

      toast.success("Your quote request has been submitted! We'll be in touch shortly.");

      setForm({
        fullName: "",
        businessName: "",
        email: "",
        phone: "",
        employees: "",
        message: "",
      });
      setInsuranceType("");

      setTimeout(() => {
        toast.success("Confirmation email sent to your inbox.");
      }, 3000);
    } catch (error) {
      console.error("QuoteForm email send error:", error);
      // Show detailed error if available
      if (error?.text) toast.error(`Failed to send: ${error.text}`);
      else toast.error("Failed to send message. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="quote" className="py-20 bg-primary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-10">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground">
                Get Your Business Covered
              </h2>
              <p className="text-primary-foreground/70 mt-3">
                Fill in the details below and our team will reach out with a custom plan.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <form onSubmit={handleSubmit} className="bg-card rounded-xl p-6 md:p-8 shadow-card-lg space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <Label htmlFor="fullName">Full Name</Label>
                  <Input
                    id="fullName"
                    placeholder="John Doe"
                    value={form.fullName}
                    onChange={(e) => handleInputChange("fullName", e.target.value)}
                    required
                    maxLength={100}
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="businessName">Business Name</Label>
                  <Input
                    id="businessName"
                    placeholder="Acme Corp"
                    value={form.businessName}
                    onChange={(e) => handleInputChange("businessName", e.target.value)}
                    required
                    maxLength={100}
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@company.com"
                    value={form.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    required
                    maxLength={255}
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    value={form.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    required
                    maxLength={20}
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <Label htmlFor="employees">Number of Employees</Label>
                  <Input
                    id="employees"
                    type="number"
                    placeholder="e.g. 25"
                    value={form.employees}
                    onChange={(e) => handleInputChange("employees", e.target.value)}
                    min={1}
                    required
                  />
                </div>
                <div className="space-y-1.5">
                  <Label>Insurance Type</Label>
                  <Select value={insuranceType} onValueChange={setInsuranceType}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select coverage type" />
                    </SelectTrigger>
                    <SelectContent>
                      {insuranceTypes.map((t) => (
                        <SelectItem key={t} value={t}>{t}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your coverage needs..."
                  rows={4}
                  maxLength={1000}
                  value={form.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                />
              </div>

              <Button type="submit" size="lg" className="w-full gap-2" disabled={loading}>
                {loading ? <>Submitting...</> : <>
                  <Send className="h-4 w-4" /> Get Business Coverage
                </>}
              </Button>

              <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground pt-1">
                <CheckCircle className="h-3.5 w-3.5 text-primary" />
                No obligation · Free consultation · Response within 24 hours
              </div>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default QuoteForm;

















// import { useState } from "react";
// import emailjs from "@emailjs/browser";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { toast } from "sonner";
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
// import { Label } from "@/components/ui/label";
// import { CheckCircle, Send } from "lucide-react";
// import ScrollReveal from "./ScrollReveal";

// const insuranceTypes = [
//   "Workers Compensation",
//   "Employer Liability",
//   "Group Health",
//   "Contractor Insurance",
//   "Payroll & Risk Protection",
// ];

// const QuoteForm = () => {
//   const [loading, setLoading] = useState(false);
//   const [insuranceType, setInsuranceType] = useState("");
//   const [form, setForm] = useState({
//     fullName: "",
//     businessName: "",
//     email: "",
//     phone: "",
//     employees: "",
//     message: "",
//   });

//   const SERVICE_ID = "service_ld4luf5";
//   const OWNER_TEMPLATE_ID = "template_u599n45";
//   const AUTO_REPLY_TEMPLATE_ID = "template_to1ink4";
//   const EMAILJS_PUBLIC_KEY = "VObJv5Vo7rtRxj0yN";

//   const handleInputChange = (key: keyof typeof form, value: string) => {
//     setForm((prev) => ({ ...prev, [key]: value }));
//   };

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     if (!insuranceType) {
//       toast.error("Please select an insurance type.");
//       return;
//     }

//     if (!EMAILJS_PUBLIC_KEY) {
//       toast.error("EmailJS public key is not configured. Please set VITE_EMAILJS_PUBLIC_KEY.");
//       return;
//     }

//     setLoading(true);

//     try {
//       const ownerPayload = {
//         full_name: form.fullName,
//         business_name: form.businessName,
//         from_email: form.email,
//         phone: form.phone,
//         employees: form.employees,
//         insurance_type: insuranceType,
//         message: form.message || "No message provided",
//       };

//       await emailjs.send(SERVICE_ID, OWNER_TEMPLATE_ID, ownerPayload, EMAILJS_PUBLIC_KEY);

//       const autoReplyPayload = {
//         customer_name: form.fullName,
//         customer_email: form.email,
//         insurance_type: insuranceType,
//       };

//       await emailjs.send(SERVICE_ID, AUTO_REPLY_TEMPLATE_ID, autoReplyPayload, EMAILJS_PUBLIC_KEY);

//       toast.success("Your quote request has been submitted! We'll be in touch shortly.");

//       setForm({
//         fullName: "",
//         businessName: "",
//         email: "",
//         phone: "",
//         employees: "",
//         message: "",
//       });
//       setInsuranceType("");

//       setTimeout(() => {
//         toast.success("Confirmation email sent to your inbox.");
//       }, 200);
//     } catch (error) {
//       console.error("QuoteForm email send error:", error);
//       toast.error("Failed to send message. Please try again later.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <section id="quote" className="py-20 bg-primary">
//       <div className="container mx-auto px-4 lg:px-8">
//         <div className="max-w-2xl mx-auto">
//           <ScrollReveal>
//             <div className="text-center mb-10">
//               <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground">
//                 Get Your Business Covered
//               </h2>
//               <p className="text-primary-foreground/70 mt-3">
//                 Fill in the details below and our team will reach out with a custom plan.
//               </p>
//             </div>
//           </ScrollReveal>

//           <ScrollReveal delay={0.15}>
//             <form onSubmit={handleSubmit} className="bg-card rounded-xl p-6 md:p-8 shadow-card-lg space-y-5">
//               <div className="grid sm:grid-cols-2 gap-4">
//                 <div className="space-y-1.5">
//                   <Label htmlFor="fullName">Full Name</Label>
//                   <Input
//                     id="fullName"
//                     name="fullName"
//                     placeholder="John Doe"
//                     value={form.fullName}
//                     onChange={(e) => handleInputChange("fullName", e.target.value)}
//                     required
//                     maxLength={100}
//                   />
//                 </div>
//                 <div className="space-y-1.5">
//                   <Label htmlFor="businessName">Business Name</Label>
//                   <Input
//                     id="businessName"
//                     name="businessName"
//                     placeholder="Acme Corp"
//                     value={form.businessName}
//                     onChange={(e) => handleInputChange("businessName", e.target.value)}
//                     required
//                     maxLength={100}
//                   />
//                 </div>
//               </div>
//               <div className="grid sm:grid-cols-2 gap-4">
//                 <div className="space-y-1.5">
//                   <Label htmlFor="email">Email</Label>
//                   <Input
//                     id="email"
//                     name="email"
//                     type="email"
//                     placeholder="you@company.com"
//                     value={form.email}
//                     onChange={(e) => handleInputChange("email", e.target.value)}
//                     required
//                     maxLength={255}
//                   />
//                 </div>
//                 <div className="space-y-1.5">
//                   <Label htmlFor="phone">Phone</Label>
//                   <Input
//                     id="phone"
//                     name="phone"
//                     type="tel"
//                     placeholder="+1 (555) 000-0000"
//                     value={form.phone}
//                     onChange={(e) => handleInputChange("phone", e.target.value)}
//                     required
//                     maxLength={20}
//                   />
//                 </div>
//               </div>
//               <div className="grid sm:grid-cols-2 gap-4">
//                 <div className="space-y-1.5">
//                   <Label htmlFor="employees">Number of Employees</Label>
//                   <Input
//                     id="employees"
//                     name="employees"
//                     type="number"
//                     placeholder="e.g. 25"
//                     value={form.employees}
//                     onChange={(e) => handleInputChange("employees", e.target.value)}
//                     min={1}
//                     required
//                   />
//                 </div>
//                 <div className="space-y-1.5">
//                   <Label>Insurance Type</Label>
//                   <Select value={insuranceType} onValueChange={setInsuranceType}>
//                     <SelectTrigger>
//                       <SelectValue placeholder="Select coverage type" />
//                     </SelectTrigger>
//                     <SelectContent>
//                       {insuranceTypes.map((t) => (
//                         <SelectItem key={t} value={t}>{t}</SelectItem>
//                       ))}
//                     </SelectContent>
//                   </Select>
//                 </div>
//               </div>
//               <div className="space-y-1.5">
//                 <Label htmlFor="message">Message</Label>
//                 <Textarea
//                   id="message"
//                   name="message"
//                   placeholder="Tell us about your coverage needs..."
//                   rows={4}
//                   maxLength={1000}
//                   value={form.message}
//                   onChange={(e) => handleInputChange("message", e.target.value)}
//                 />
//               </div>
//               <Button type="submit" size="lg" className="w-full gap-2" disabled={loading}>
//                 {loading ? (
//                   <>Submitting...</>
//                 ) : (
//                   <>
//                     <Send className="h-4 w-4" />
//                     Get Business Coverage
//                   </>
//                 )}
//               </Button>
//               <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground pt-1">
//                 <CheckCircle className="h-3.5 w-3.5 text-primary" />
//                 No obligation · Free consultation · Response within 24 hours
//               </div>
//             </form>
//           </ScrollReveal>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default QuoteForm;
