import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { MetaAdsLeadForm } from "./MetaAdsLeadForm";

interface MetaAdsModalProps {
  isOpen: boolean;
  onClose: () => void;
  programName?: string;
  slotPrice?: number;
  paymentLink?: string;
}

export function MetaAdsModal({
  isOpen,
  onClose,
  programName = "AI Full Stack Developer Pro",
  slotPrice = 500,
  paymentLink = "https://rzp.io/rzp/vvONUeGp",
}: MetaAdsModalProps) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/70 backdrop-blur-xs"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full max-w-xl z-10 my-8"
        >
          {/* Close button */}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-[#171717]/10 hover:bg-[#171717]/20 flex items-center justify-center text-[#171717] transition-colors focus:outline-none"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <MetaAdsLeadForm
            programName={programName}
            slotPrice={slotPrice}
            paymentLink={paymentLink}
            onSuccess={() => {
              // modal remains open to show redirection screen
            }}
          />
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
