import ImageSlideshow from "@/components/ImageSlideshow";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion, Variants } from "framer-motion";
import { AlertTriangle, Clock, MessageCircle, Phone } from "lucide-react";
import Link from "next/link";
import React from "react";

interface HeroProps {
  countdown: { minutes: number; seconds: number };
  fadeIn: Variants;
  Star: React.ElementType;
}

const Hero: React.FC<HeroProps> = ({ countdown, fadeIn, Star }) => (
  <section className="pt-24 md:pt-32 pb-12 md:pb-20 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
    <div className="container px-4 mx-auto max-w-7xl">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="text-center md:text-left"
        >
          <Badge className="mb-4 bg-blue-100 text-blue-700 border-blue-200 px-3 py-1 text-sm">
            <AlertTriangle className="h-3 w-3 mr-1" />
            Emergency Locksmith Service
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            Locked Out in <span className="text-blue-600">Birmingham?</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-700 mb-6 leading-relaxed">
            Your Local 24/7 Locksmith Is Already Heading Over –{" "}
            <span className="font-semibold">Personally</span>
          </p>
          <div className="mb-8 p-4 bg-white border border-slate-200 shadow-sm rounded-lg inline-block">
            <p className="text-lg text-slate-700 font-medium">
              One Trusted Professional • Round-the-Clock Service • Proudly Local
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Button
              className="bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-2 px-6 py-6 text-lg group relative overflow-hidden w-full sm:w-auto"
              asChild
            >
              <a href="tel:+447551458842">
                <div className="absolute inset-0 w-0 bg-blue-800 transition-all duration-[400ms] ease-out group-hover:w-full"></div>
                <Phone className="h-5 w-5 relative z-10" />
                <span className="font-bold relative z-10">
                  Call +44 7551 458842
                </span>
              </a>
            </Button>
            <Button
              variant="outline"
              className="border-blue-600 text-blue-600 hover:bg-blue-50 flex items-center gap-2 px-6 py-6 text-lg w-full sm:w-auto"
              asChild
            >
              <Link href="https://wa.me/447551458842">
                <MessageCircle className="h-5 w-5" />
                <span className="font-bold">Tap to WhatsApp</span>
              </Link>
            </Button>
          </div>
          <div className="mt-2 bg-green-100 text-green-800 border border-green-200 px-4 py-3 rounded-full inline-flex items-center font-medium shadow-sm">
            <Clock className="h-5 w-5 mr-2" /> I&apos;m 10 Minutes Away
          </div>
        </motion.div>
        <ImageSlideshow countdown={countdown} fadeIn={fadeIn} Star={Star} />
      </div>
    </div>
  </section>
);

export default Hero;
