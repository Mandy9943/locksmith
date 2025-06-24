"use client";

import AnimatedList from "@/components/AnimatedList";
import Hero from "@/components/Hero";
import TiltedCard from "@/components/TiltedCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  Building,
  CheckCircle,
  Clock,
  CreditCard,
  Home,
  Key,
  Lock,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Shield,
  Star,
  PenToolIcon as Tool,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export const runtime = "edge";

export default function LandingPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [countdown, setCountdown] = useState({ minutes: 10, seconds: 0 });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      if (countdown.seconds > 0) {
        setCountdown((prev) => ({ ...prev, seconds: prev.seconds - 1 }));
      } else if (countdown.minutes > 0) {
        setCountdown({ minutes: countdown.minutes - 1, seconds: 59 });
      } else {
        setCountdown({ minutes: 10, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [countdown]);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const differentItems = [
    {
      icon: <Phone className="h-8 w-8" />,
      title: "You Speak to Me, Not a Call-Centre",
      description:
        "From first ring to job done, you deal with the owner – no hand-offs, no miscommunication.",
    },
    {
      icon: <MapPin className="h-8 w-8" />,
      title: 'Local "Brummie" Know-How',
      description:
        "Based on Yardley Road, I know Birmingham traffic shortcuts and the quirks of its Victorian and modern locks alike.",
    },
    {
      icon: <CreditCard className="h-8 w-8" />,
      title: "Up-Front, Fair Pricing",
      description:
        "I quote before starting; no hidden weekend surcharges and never a call-out fee.",
    },
    {
      icon: <Home className="h-8 w-8" />,
      title: "Respect for Your Time & Property",
      description:
        "Clean work, shoe covers indoors, and I'll tidy any drilling dust before I leave.",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Security-First Approach",
      description:
        "Only British-Standard, insurance-approved parts – your safety isn't negotiable.",
    },
  ].map((item, index) => (
    <div key={index} className="grid md:grid-cols-6 gap-6 items-center">
      <div className="md:col-span-1 flex justify-center">
        <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mb-4 md:mb-0">
          {item.icon}
        </div>
      </div>
      <div className="md:col-span-5 text-center md:text-left">
        <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
        <p className="text-slate-700 text-lg">{item.description}</p>
      </div>
    </div>
  ));

  return (
    <div className="min-h-screen bg-white">
      {/* Sticky Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
        }`}
      >
        <div className="container mx-auto px-4 max-w-7xl flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Image
              src="/logo.webp"
              alt="Lock Savers Logo"
              width={40}
              height={40}
            />

            <div>
              <h2 className="font-bold text-slate-900 text-lg">Lock Savers</h2>
              <p className="text-xs text-slate-600">Locksmiths</p>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Badge
                variant="outline"
                className="bg-green-50 text-green-700 border-green-200 px-2 py-1"
              >
                <Clock className="h-3 w-3 mr-1" />
                24/7 Service
              </Badge>
              <Badge
                variant="outline"
                className="bg-blue-50 text-blue-700 border-blue-200 px-2 py-1"
              >
                <MapPin className="h-3 w-3 mr-1" />
                Birmingham
              </Badge>
            </div>

            <Link
              href="tel:+447551458842"
              className="text-blue-600 font-bold hover:text-blue-800 transition-colors flex items-center"
            >
              <Phone className="h-4 w-4 mr-2" />
              +44 7551 458842
            </Link>
          </div>

          <Button className="bg-blue-600 hover:bg-blue-700 text-white md:hidden">
            <Phone className="h-4 w-4 mr-2" />
            Call Now
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <Hero countdown={countdown} fadeIn={fadeIn} Star={Star} />

      {/* Trust Indicators */}
      <section className="py-8 bg-slate-50 border-y border-slate-100">
        <div className="container px-4 mx-auto max-w-7xl">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-blue-600" />
              <span className="text-slate-700 font-medium">DBS-Checked</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-blue-600" />
              <span className="text-slate-700 font-medium">
                12-Month Guarantee
              </span>
            </div>
            <div className="flex items-center gap-2">
              <CreditCard className="h-5 w-5 text-blue-600" />
              <span className="text-slate-700 font-medium">
                No Call-Out Fees
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-blue-600" />
              <span className="text-slate-700 font-medium">24/7 Service</span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 mx-auto max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <Badge className="mb-4 bg-blue-100 text-blue-700 border-blue-200 px-3 py-1">
              Why Choose Us
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Why Neighbours Call Lock Savers First
            </h2>
            <p className="text-lg text-slate-600">
              When you&apos;re locked out, you need someone you can trust to
              arrive quickly and solve your problem efficiently.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <motion.div
              variants={fadeIn}
              className="bg-white p-8 rounded-xl shadow-lg border border-slate-100 hover:shadow-xl transition-shadow group"
            >
              <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <CheckCircle className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                Personal Service
              </h3>
              <p className="text-slate-600">
                Sole, DBS-checked owner-operator – you always get the same
                friendly expert
              </p>
            </motion.div>

            <motion.div
              variants={fadeIn}
              className="bg-white p-8 rounded-xl shadow-lg border border-slate-100 hover:shadow-xl transition-shadow group"
            >
              <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Clock className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                Fast Response
              </h3>
              <p className="text-slate-600">
                Fast arrival – typically 20-30 minutes across Birmingham &
                suburbs
              </p>
            </motion.div>

            <motion.div
              variants={fadeIn}
              className="bg-white p-8 rounded-xl shadow-lg border border-slate-100 hover:shadow-xl transition-shadow group"
            >
              <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                Damage-Free Entry
              </h3>
              <p className="text-slate-600">
                Damage-free entry in 90%+ of emergencies
              </p>
            </motion.div>

            <motion.div
              variants={fadeIn}
              className="bg-white p-8 rounded-xl shadow-lg border border-slate-100 hover:shadow-xl transition-shadow group"
            >
              <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <CheckCircle className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                Guaranteed Work
              </h3>
              <p className="text-slate-600">
                12-month guarantee on every lock we fit or repair
              </p>
            </motion.div>

            <motion.div
              variants={fadeIn}
              className="bg-white p-8 rounded-xl shadow-lg border border-slate-100 hover:shadow-xl transition-shadow group"
            >
              <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <CreditCard className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                Transparent Pricing
              </h3>
              <p className="text-slate-600">
                No call-out fees & fully transparent quotes before work begins
              </p>
            </motion.div>

            <motion.div
              variants={fadeIn}
              className="relative bg-blue-600 p-8 rounded-xl shadow-lg text-white overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 -mr-10 -mt-10 bg-blue-500 rounded-full"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 -ml-10 -mb-10 bg-blue-500 rounded-full"></div>

              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-4">Need Help Now?</h3>
                <p className="mb-6">
                  Don&apos;t wait - our emergency locksmith service is just a
                  call away.
                </p>
                <Button
                  className="bg-white text-blue-600 hover:bg-slate-100 w-full"
                  asChild
                >
                  <a href="tel:+447551458842">
                    <Phone className="h-4 w-4 mr-2" />
                    Call +44 7551 458842
                  </a>
                </Button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Certification Section */}
      <section className="py-20 bg-slate-50">
        <div className="container px-4 mx-auto max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <Badge className="mb-4 bg-blue-100 text-blue-700 border-blue-200 px-3 py-1">
              Certified & Qualified
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Proudly Certified for Your Peace of Mind
            </h2>
            <p className="text-lg text-slate-600">
              I hold official certifications, ensuring my work meets the highest
              industry standards. This certificate is from the UK Locksmiths
              Association for the Advanced Mechanisms Course.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="flex justify-center"
          >
            <TiltedCard
              imageSrc="/images/image5.jpg"
              altText="UK Locksmiths Association Certificate"
              captionText="Advanced Mechanisms Course Certificate"
              containerHeight="350px"
              imageHeight="350px"
              scaleOnHover={1.05}
              rotateAmplitude={10}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={false}
              // containerClassName="w-[350px] md:w-[500px]"
              // imageClassName="w-[350px] md:w-[500px]"
            />
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 mx-auto max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <Badge className="mb-4 bg-blue-100 text-blue-700 border-blue-200 px-3 py-1">
              Our Services
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Services I Offer
            </h2>
            <p className="text-lg text-slate-600">
              Professional locksmith services for all your security needs,
              available 24/7.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <motion.div
              variants={fadeIn}
              className="bg-white p-6 rounded-xl shadow-md border border-slate-100 hover:shadow-lg transition-all hover:border-blue-200 group"
            >
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Key className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                24/7 Emergency Lock-Outs
              </h3>

              <p className="text-slate-600">
                Emergency door, window & garage lock-out services available any
                time, day or night.
              </p>
            </motion.div>

            <motion.div
              variants={fadeIn}
              className="bg-white p-6 rounded-xl shadow-md border border-slate-100 hover:shadow-lg transition-all hover:border-blue-200 group"
            >
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Lock className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                Lock Changes & Upgrades
              </h3>

              <p className="text-slate-600">
                uPVC, composite, wooden & aluminium doors - all types of locks
                serviced and upgraded.
              </p>
            </motion.div>

            <motion.div
              variants={fadeIn}
              className="bg-white p-6 rounded-xl shadow-md border border-slate-100 hover:shadow-lg transition-all hover:border-blue-200 group"
            >
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Tool className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                Broken Key Extraction
              </h3>
              <p className="text-slate-600">
                Broken key extraction & gearbox repairs for all types of locks
                and doors.
              </p>
            </motion.div>

            <motion.div
              variants={fadeIn}
              className="bg-white p-6 rounded-xl shadow-md border border-slate-100 hover:shadow-lg transition-all hover:border-blue-200 group"
            >
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Shield className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                High-Security Locks
              </h3>
              <p className="text-slate-600">
                Smart-, anti-snap & high-security lock installation for maximum
                protection.
              </p>
            </motion.div>

            <motion.div
              variants={fadeIn}
              className="bg-white p-6 rounded-xl shadow-md border border-slate-100 hover:shadow-lg transition-all hover:border-blue-200 group"
            >
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Building className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                Commercial Locksmith
              </h3>
              <p className="text-slate-600">
                Commercial locksmith work for shops, offices, restaurants, and
                landlords.
              </p>
            </motion.div>

            <motion.div
              variants={fadeIn}
              className="bg-white p-6 rounded-xl shadow-md border border-slate-100 hover:shadow-lg transition-all hover:border-blue-200 group"
            >
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <MessageCircle className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                Free Security Advice
              </h3>
              <p className="text-slate-600">
                Free security advice & quotes – photos by WhatsApp welcome for
                quick assessment.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="py-12 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container px-4 mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2">
                Locked out? Don&apos;t panic!
              </h2>
              <p className="text-blue-100">
                Professional help is just one call away - available 24/7.
              </p>
            </div>
            <div className="flex flex-col md:flex-row gap-4">
              <Button
                className="bg-white text-blue-600 hover:bg-slate-100 flex items-center gap-2 px-6 py-6 text-lg"
                asChild
              >
                <a href="tel:+447551458842">
                  <Phone className="h-5 w-5" />
                  <span className="font-bold">Call +44 7551 458842</span>
                </a>
              </Button>
              <Button
                variant="outline"
                className="border-white bg-blue-500 hover:text-white text-white hover:bg-blue-700 flex items-center gap-2 px-6 py-6 text-lg w-full md:w-auto"
                asChild
              >
                <Link href="https://wa.me/447551458842">
                  <MessageCircle className="h-5 w-5" />
                  <span className="font-bold">WhatsApp Now</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 mx-auto max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <Badge className="mb-4 bg-blue-100 text-blue-700 border-blue-200 px-3 py-1">
              Testimonials
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Real-World Results
            </h2>
            <p className="text-lg text-slate-600">
              Don&apos;t just take our word for it. Here&apos;s what our
              customers have to say.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            <motion.div
              variants={fadeIn}
              className="bg-white p-8 rounded-xl shadow-lg border border-slate-100 relative"
            >
              <div className="absolute top-0 right-0 bg-blue-600 text-white rounded-bl-lg rounded-tr-lg py-1 px-3 text-sm font-medium">
                5 days ago
              </div>
              <div className="flex mb-6">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="text-slate-700 mb-6 italic">
                &quot;Key snapped in the lock and I was stranded. Cornel arrived
                quickly, opened the door without damage and the price was much
                better than expected.&quot;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 font-bold">
                  AB
                </div>
                <div>
                  <p className="font-bold text-slate-900">Adrian Brostiuc</p>
                  <p className="text-sm text-slate-600">Birmingham</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={fadeIn}
              className="bg-white p-8 rounded-xl shadow-lg border border-slate-100 relative"
            >
              <div className="absolute top-0 right-0 bg-blue-600 text-white rounded-bl-lg rounded-tr-lg py-1 px-3 text-sm font-medium">
                7 days ago
              </div>
              <div className="flex mb-6">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="text-slate-700 mb-6 italic">
                &quot;Stuck window wouldn&apos;t budge. Friendly, professional
                and sorted in minutes. Surprised how affordable it was.&quot;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 font-bold">
                  DP
                </div>
                <div>
                  <p className="font-bold text-slate-900">Daniel Plesca</p>
                  <p className="text-sm text-slate-600">Birmingham</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={fadeIn}
              className="bg-white p-8 rounded-xl shadow-lg border border-slate-100 relative"
            >
              <div className="absolute top-0 right-0 bg-blue-600 text-white rounded-bl-lg rounded-tr-lg py-1 px-3 text-sm font-medium">
                21 days ago
              </div>
              <div className="flex mb-6">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="text-slate-700 mb-6 italic">
                &quot;Lost the key to my restaurant at 6 a.m.; he got there fast
                and opened up with zero damage so I could trade on time.
                Lifesaver!&quot;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 font-bold">
                  MR
                </div>
                <div>
                  <p className="font-bold text-slate-900">
                    Mihaela-Andreea Rusu
                  </p>
                  <p className="text-sm text-slate-600">Restaurant Owner</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <div className="text-center mt-10">
            <p className="text-slate-600 mb-6">
              (Over 30 more five-star reviews available on Google –{" "}
              <a
                href=" https://www.google.com/search?q=Lock+Savers+Locksmiths+Birmingham&rlz=1C5CHFA_enAE1142AE1142&oq=Lock+Savers+Locksmiths+Birmingham&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBBzI3MGowajeoAgCwAgA&sourceid=chrome&ie=UTF-8"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-600 underline"
              >
                click here to verify
              </a>{" "}
              )
            </p>
            <div className="inline-flex items-center gap-2 bg-slate-100 px-4 py-2 rounded-full">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <span className="text-slate-700 font-medium">
                5.0 average from 30+ reviews
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different Section */}
      <section className="py-20 bg-slate-50">
        <div className="container px-4 mx-auto max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <Badge className="mb-4 bg-blue-100 text-blue-700 border-blue-200 px-3 py-1">
              Our Difference
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              What Makes My Service Different?
            </h2>
            <p className="text-lg text-slate-600">
              Not all locksmiths are created equal. Here&apos;s why customers
              choose Lock Savers.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <AnimatedList
              items={differentItems}
              displayScrollbar={false}
              showGradients={false}
              className="!overflow-visible"
              itemClassName="border border-slate-100 hover:shadow-lg transition-shadow !p-8 rounded-xl"
            />
          </div>
        </div>
      </section>

      {/* Coverage Zone Section */}
      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="text-center max-w-3xl mx-auto mb-10"
          >
            <Badge className="mb-4 bg-blue-100 text-blue-700 border-blue-200 px-3 py-1">
              Service Area
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Coverage Zone – 24 Hours a Day
            </h2>
            <p className="text-lg text-slate-600">
              Serving all of Birmingham and surrounding areas, any time of day
              or night.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <div className="bg-slate-50 p-8 rounded-xl shadow-md border border-slate-100 text-center">
              <div className="relative h-96 mb-8 rounded-lg overflow-hidden shadow-md border border-slate-200">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d77964.74388513782!2d-1.9721664419921875!3d52.48089520000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4870942d1b417173%3A0xca81fef0aeee7998!2sBirmingham%2C%20UK!5e0!3m2!1sen!2sus!4v1683654321000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Lock Savers Birmingham Coverage Map"
                  className="w-full h-full"
                />
                <div className="absolute top-4 left-4 bg-white px-4 py-2 rounded-lg shadow-md z-10">
                  <div className="flex items-center">
                    <div className="mr-2 relative w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                      <Lock className="h-4 w-4 text-white" />
                    </div>
                    <p className="font-bold text-slate-900">
                      Lock Savers Coverage Area
                    </p>
                  </div>
                </div>
              </div>
              <p className="text-lg text-slate-800 font-medium">
                Birmingham City Centre • Yardley • Solihull • Moseley • Harborne
                • Sutton Coldfield • Digbeth • Kings Heath • Handsworth • plus
                every postcode within 15 miles.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-50">
        <div className="container px-4 mx-auto max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <Badge className="mb-4 bg-blue-100 text-blue-700 border-blue-200 px-3 py-1">
              FAQs
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Quick FAQs
            </h2>
            <p className="text-lg text-slate-600">
              Common questions about our locksmith services.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-8"
          >
            <motion.div
              variants={fadeIn}
              className="bg-white p-8 rounded-xl shadow-md border border-slate-100 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-3 flex-shrink-0">
                  <span className="font-bold">Q</span>
                </div>
                How soon can you reach me?
              </h3>
              <div className="ml-11">
                <p className="text-slate-700">
                  Most addresses in 20–30 minutes; I&apos;ll confirm an ETA on
                  the call.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={fadeIn}
              className="bg-white p-8 rounded-xl shadow-md border border-slate-100 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-3 flex-shrink-0">
                  <span className="font-bold">Q</span>
                </div>
                Will my door be damaged?
              </h3>
              <div className="ml-11">
                <p className="text-slate-700">
                  Non-destructive techniques first; replacement only if
                  unavoidable.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={fadeIn}
              className="bg-white p-8 rounded-xl shadow-md border border-slate-100 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-3 flex-shrink-0">
                  <span className="font-bold">Q</span>
                </div>
                Do you work nights & bank holidays?
              </h3>
              <div className="ml-11">
                <p className="text-slate-700">
                  Yes – it&apos;s still me, just with a strong coffee.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={fadeIn}
              className="bg-white p-8 rounded-xl shadow-md border border-slate-100 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-3 flex-shrink-0">
                  <span className="font-bold">Q</span>
                </div>
                Card payments OK?
              </h3>
              <div className="ml-11">
                <p className="text-slate-700">
                  Absolutely – I carry a portable reader.
                </p>
              </div>
            </motion.div>
          </motion.div>

          <div className="text-center mt-10">
            <p className="text-lg text-slate-700 mb-6">
              Have another question?
            </p>
            <Button
              className="text-xs md:text-base bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-2 px-6 py-3  mx-auto w-fit"
              asChild
            >
              <a href="tel:+447551458842">
                <Phone className="h-5 w-5" />
                <span className="font-bold">
                  Call +44 7551 458842 and ask directly
                </span>
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/lock-pattern-dark.jpg')] bg-repeat opacity-5"></div>

        <div className="container px-4 mx-auto max-w-7xl relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="text-center max-w-3xl mx-auto"
          >
            <Badge className="mb-4 bg-white/20 text-white border-white/10 px-3 py-1">
              Emergency Service
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Need Help Right Now?
            </h2>
            <p className="text-xl mb-10 text-blue-100">
              Call +44 7551 458842 or start a WhatsApp chat – I&apos;m ready
              24/7 to get you back inside and secure your property.
            </p>

            <div className="flex flex-col md:flex-row justify-center items-center gap-6">
              <Button
                className="bg-white text-blue-600 hover:bg-slate-100 flex items-center gap-2 px-8 py-7 text-xl w-full md:w-auto group relative overflow-hidden"
                asChild
              >
                <a href="tel:+447551458842">
                  <div className="absolute inset-0 w-0 bg-slate-200 transition-all duration-[400ms] ease-out group-hover:w-full"></div>
                  <Phone className="h-6 w-6 relative z-10" />
                  <span className="font-bold relative z-10">
                    Call +44 7551 458842
                  </span>
                </a>
              </Button>
              <Link
                href="https://wa.me/447551458842"
                className="inline-flex items-center justify-center border border-white text-white hover:bg-blue-700 gap-2 px-8 py-7 text-xl w-full md:w-auto rounded-md"
              >
                <MessageCircle className="h-6 w-6" />
                <span className="font-bold">Start WhatsApp Chat</span>
              </Link>
            </div>

            <div className="mt-12 p-6 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20 max-w-2xl mx-auto">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-blue-600">
                  <Clock className="h-8 w-8" />
                </div>
                <div className="text-left">
                  <p className="text-blue-100">Average response time</p>
                  <p className="text-2xl font-bold">2 minutes</p>
                </div>
              </div>
              <p className="text-blue-100">
                Don&apos;t wait until it&apos;s too late. Call now for immediate
                assistance with your lock emergency.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-slate-900 text-white">
        <div className="container px-4 mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <div className="flex items-center mb-6 gap-2">
                <Image
                  src="/logo.webp"
                  alt="Lock Savers Logo"
                  width={40}
                  height={40}
                />
                <div>
                  <h2 className="font-bold text-white text-lg">Lock Savers</h2>
                  <p className="text-xs text-slate-400">Locksmiths</p>
                </div>
              </div>
              <p className="text-slate-300 mb-6 max-w-md">
                Birmingham&apos;s personal, professional locksmith, any hour of
                the day or night.
              </p>
              <div className="flex gap-4">
                <Link
                  href="tel:+447551458842"
                  className="text-white hover:text-blue-400 transition-colors"
                >
                  <Phone className="h-5 w-5" />
                </Link>
                <Link
                  href="https://wa.me/447551458842"
                  className="text-white hover:text-blue-400 transition-colors"
                >
                  <MessageCircle className="h-5 w-5" />
                </Link>
                <Link
                  href="#"
                  className="text-white hover:text-blue-400 transition-colors"
                >
                  <Mail className="h-5 w-5" />
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold text-lg mb-4">Services</h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="#"
                      className="text-slate-300 hover:text-white transition-colors"
                    >
                      Emergency Lock-Outs
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-slate-300 hover:text-white transition-colors"
                    >
                      Lock Changes
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-slate-300 hover:text-white transition-colors"
                    >
                      Key Extraction
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-slate-300 hover:text-white transition-colors"
                    >
                      Security Upgrades
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-slate-300 hover:text-white transition-colors"
                    >
                      Commercial Services
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-4">Coverage</h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="#"
                      className="text-slate-300 hover:text-white transition-colors"
                    >
                      Birmingham City Centre
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-slate-300 hover:text-white transition-colors"
                    >
                      Yardley
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-slate-300 hover:text-white transition-colors"
                    >
                      Solihull
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-slate-300 hover:text-white transition-colors"
                    >
                      Moseley
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-slate-300 hover:text-white transition-colors"
                    >
                      View All Areas
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Lock Savers Locksmiths. All rights
              reserved.
            </p>
            <div className="flex gap-6">
              <Link
                href="#"
                className="text-slate-400 hover:text-white transition-colors text-sm"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-slate-400 hover:text-white transition-colors text-sm"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Call Button (Mobile Only) */}
      <div className="fixed bottom-6 right-6 md:hidden z-50">
        <Link href="tel:+447551458842">
          <Button className="w-16 h-16 rounded-full bg-blue-600 hover:bg-blue-700 flex items-center justify-center shadow-lg">
            <Phone className="h-6 w-6 text-white" />
          </Button>
        </Link>
      </div>
    </div>
  );
}
