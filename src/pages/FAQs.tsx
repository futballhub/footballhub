
import React from "react";
import Navbar from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is FootballHub?",
    answer:
      "FootballHub is your ultimate destination for football news, videos, stats, live streaming, and more. Stay updated with real-time content from the world of football.",
  },
  {
    question: "How do I watch live matches?",
    answer:
      "To watch live matches, simply log in and go to the Live Matches section. If you’re not registered, create a free account and access exclusive live football content.",
  },
  {
    question: "How can I get the latest news?",
    answer:
      "Latest football news is updated daily in our News section. You can also subscribe to our newsletter for direct news updates.",
  },
  {
    question: "How do I subscribe to the newsletter?",
    answer:
      "Enter your email address in the newsletter section on our homepage and click Subscribe. You'll need to be logged in to subscribe.",
  },
  {
    question: "Who can I contact for support?",
    answer:
      "Reach out to us through the Contact page for any inquiries or support needs. Our team is here to help you.",
  },
];

const FAQs = () => (
  <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
    <Navbar />
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-4xl font-bold mb-6">Frequently Asked Questions</h1>
      <Card className="bg-gray-800 border-none">
        <CardHeader>
          <CardTitle>FAQs</CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion type="multiple">
            {faqs.map((item, idx) => (
              <AccordionItem key={idx} value={String(idx)}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>
    </div>
  </div>
);

export default FAQs;
