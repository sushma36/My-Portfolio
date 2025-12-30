import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, GraduationCap, Award } from 'lucide-react';

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.3, 1, 1, 0.3]);

  return (
    <section id="about" ref={ref} className="py-20 md:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-dark-950 opacity-90" />
        <motion.div
          className="absolute -top-[30%] -right-[10%] w-[70%] h-[70%] rounded-full bg-primary-500/10 filter blur-3xl"
          style={{ y, opacity }}
        />
        <motion.div
          className="absolute -bottom-[30%] -left-[10%] w-[70%] h-[70%] rounded-full bg-secondary-500/10 filter blur-3xl"
          style={{ y: useTransform(scrollYProgress, [0, 1], [-100, 100]), opacity }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10" ref={containerRef}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            My journey in the world of digital creation and the skills I've acquired along the way.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Bio section */}
          <motion.div 
            className="lg:col-span-3 glass rounded-xl p-6 md:p-8"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-display font-bold mb-4">Who I Am</h3>
            <p className="text-white/80 mb-4 leading-relaxed">
             I am a Data Engineer with 4+ years of experience building cloud-native, scalable data platforms across healthcare and enterprise domains. I specialize in designing high-performance data lakes, ETL/ELT pipelines, and analytics-ready architectures on AWS and GCP. My work focuses on transforming large, complex datasets into reliable data products. I prioritize performance, security, and regulatory compliance in every solution.
            </p>
            <p className="text-white/80 mb-4 leading-relaxed">
              I design and implement AI-enabled data platforms that process millions of records with low latency and high reliability. Using Apache Airflow, Spark, and Delta Lake, I automate data ingestion, validation, and transformation workflows. My solutions support real-time analytics, fraud detection, and machine learning use cases. I collaborate closely with cross-functional teams to enable scalable, production-grade analytics.
            </p>
            <p className="text-white/80 leading-relaxed">
              I have strong experience in data migration, warehousing, and analytics optimization across cloud platforms. I improve query performance and reduce infrastructure costs through advanced data modeling, partitioning, and clustering strategies. I also build data quality, lineage, and auditing frameworks to ensure trusted reporting. My goal is to deliver resilient data systems that drive faster insights and smarter business decisions.
            </p>
          </motion.div>

          {/* Timeline section */}
          <motion.div 
            className="lg:col-span-2 space-y-6"
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="glass rounded-xl p-6">
              <div className="flex items-start mb-4">
                <div className="bg-primary-500/20 p-3 rounded-lg mr-4">
                  <Briefcase className="h-6 w-6 text-primary-500" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white">Data Engineer</h4>
                  <div className="flex flex-wrap items-center justify-between text-white/60 text-sm gap-x-20">
                    <span>November 2024 – Present</span>
                    <span className="ml-auto">Cigna Corporation </span>
                  </div>
                </div>
              </div>
              <p className="text-white/80">
                Engineered scalable, compliant AI-driven data platforms for high-performance analytics and machine learning on AWS.
              </p>
            </div>

            <div className="glass rounded-xl p-6">
              <div className="flex items-start mb-4">
                <div className="bg-secondary-500/20 p-3 rounded-lg mr-4">
                  <Briefcase className="h-6 w-6 text-secondary-500" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white">Data Engineer</h4>
                  <div className="flex flex-wrap items-center justify-between text-white/60 text-sm gap-x-20">
                    <span>August 2020 – December 2023</span>
                    <span className="ml-auto">Cognizant </span>
                  </div>
                </div>
              </div>
              <p className="text-white/80">
                Delivered large-scale data migration and analytics modernization with cost-efficient, high-performance BigQuery solutions.
              </p>
            </div>

            <div className="glass rounded-xl p-6">
              <div className="flex items-start mb-4">
                <div className="bg-accent-500/20 p-3 rounded-lg mr-4">
                  <GraduationCap className="h-6 w-6 text-accent-500" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white">MS Computer Science</h4>
                  <div className="flex flex-wrap items-center justify-between text-white/60 text-sm gap-x-20">
                    <span>January 2024 – March 2025</span>
                    <span className="ml-auto">Sacred Heart University</span>
                  </div>
                </div>
              </div>
              <p className="text-white/80">
                Master’s degree in Computer Science and Information Technology focused on data engineering, analytics, and cloud technologies.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;