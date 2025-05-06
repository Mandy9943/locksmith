import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { AlertTriangle, MessageCircle, Phone } from "lucide-react";
import Link from "next/link";
import React from "react";
import ImageSlideshow from "./ImageSlideshow";

interface HeroProps {
  countdown: { minutes: number; seconds: number };
  fadeIn: any;
  Star: React.ElementType;
}

const Hero: React.FC<HeroProps> = ({ countdown, fadeIn, Star }) => (
  <section className="pt-32 pb-20 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
    <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none">
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/lock-pattern-light.jpg')] bg-repeat opacity-20"></div>
    </div>
    <div className="container px-4 mx-auto max-w-7xl">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="text-left"
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
          <div className="mb-8 p-4 bg-blue-50 border border-blue-100 rounded-lg inline-block">
            <p className="text-lg text-slate-700 font-medium">
              One Trusted Professional • Round-the-Clock Service • Proudly Local
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-2 px-6 py-6 text-lg group relative overflow-hidden">
              <div className="absolute inset-0 w-0 bg-blue-800 transition-all duration-[400ms] ease-out group-hover:w-full"></div>
              <Phone className="h-5 w-5 relative z-10" />
              <span className="font-bold relative z-10">
                Call +44 7551 458842
              </span>
            </Button>
            <Link href="https://wa.me/447551458842">
              <Button
                variant="outline"
                className="border-blue-600 text-blue-600 hover:bg-blue-50 flex items-center gap-2 px-6 py-6 text-lg"
              >
                <MessageCircle className="h-5 w-5" />
                <span className="font-bold">Tap to WhatsApp</span>
              </Button>
            </Link>
          </div>
          <div className="mt-2 bg-green-50 text-green-700 px-4 py-2 rounded-full inline-flex items-center font-medium">
            <span className="mr-2 text-xl">🕒</span> I&apos;m 10 Minutes Away
          </div>
        </motion.div>
        <ImageSlideshow countdown={countdown} fadeIn={fadeIn} Star={Star} />
      </div>
    </div>
  </section>
);

export default Hero;
