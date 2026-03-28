"use client";

import { Button } from "@/components/ui/button";
import { Check, FileText } from "lucide-react";

export function PricingTable() {
  const productLink =
    "https://www.creem.io/payment/prod_4x7zxiHpnM7RdjNCDR2S7J";

  const features = [
    "Lifetime access to ChatWithPDF",
    "Unlimited PDF uploads",
    "AI-powered conversations with your PDFs",
    "Extract and analyze text instantly",
  ];

  return (
    <div className="w-full min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Pricing Card */}
        <div className="rounded-2xl bg-gray-50 dark:bg-gray-900 p-8 border border-gray-200 dark:border-gray-800">
          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 flex items-center justify-center bg-white dark:bg-gray-800 rounded-full border-2 border-gray-300 dark:border-gray-700">
              <FileText className="w-8 h-8 text-gray-900 dark:text-white" />
            </div>
          </div>

          {/* Title */}
          <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-2">
            ChatWithPDF
          </h2>

          {/* Description */}
          <p className="text-center text-gray-600 dark:text-gray-400 text-sm mb-6">
            One-time payment for lifetime access
          </p>

          {/* Price */}
          <div className="text-center mb-8">
            <span className="text-5xl font-bold text-gray-900 dark:text-white">
              $9
            </span>
            <span className="text-gray-600 dark:text-gray-400 ml-2">
              one-time
            </span>
          </div>

          {/* CTA Button */}
          <a
            href={productLink}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full mb-8"
          >
            <Button className="w-full rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 py-6 text-base font-semibold">
              Get Started
            </Button>
          </a>

          {/* Features */}
          <div className="space-y-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-1">
                  <Check className="w-5 h-5 text-green-600 dark:text-green-500" />
                </div>
                <span className="text-gray-700 dark:text-gray-300 text-sm">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Note */}
        <p className="text-center text-xs text-gray-500 dark:text-gray-400 mt-6">
          Secure checkout powered by Creem
        </p>
      </div>
    </div>
  );
}
