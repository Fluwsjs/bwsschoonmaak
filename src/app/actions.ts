"use server";

interface ContactFormData {
  naam: string;
  email: string;
  telefoon: string;
  bericht: string;
}

export async function handleContactFormSubmit(formData: ContactFormData) {
  // In een echte applicatie zou je hier email versturen of data opslaan
  // Voor nu loggen we de data naar de console
  console.log("Contact formulier ontvangen:", formData);
  
  // Simulatie van asynchrone verwerking
  await new Promise((resolve) => setTimeout(resolve, 1000));
  
  return { success: true };
} 