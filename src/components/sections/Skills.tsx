import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Palette, Layers, Database, Braces, Monitor } from 'lucide-react';
import SkillCard from '../ui/SkillCard';

const Skills = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 20]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -20]);

  const skills = [
    {
      id: 1,
      title: 'Programming & Scripting',
      description: 'Proficient in programming and scripting languages to develop, automate, and optimize data workflows.',
      icon: <Code className="w-6 h-6" />,
      technologies: ['Python', 'Scala', 'Java', 'Shell Scripting'],
      color: 'primary',
    },
    {
      id: 2,
      title: 'Databases & Data Warehousing',
      description: 'Expert in designing, querying, and managing relational, NoSQL, and cloud-based data storage solutions.',
      icon: <Layers className="w-6 h-6" />,
      technologies: ['SQL', 'PostgreSQL', 'MySQL', 'MongoDB', 'DynamoDB', 'Google BigQuery', 'Azure Synapse Analytics'],
      color: 'secondary',
    },
    {
      id: 3,
      title: 'Machine Learning & AI',
      description: 'Skilled in building, deploying, and optimizing machine learning and AI-driven applications and models.',
      icon: <Database className="w-6 h-6" />,
      technologies: ['Scikit-learn', 'TensorFlow', 'PyTorch', 'Large Language Models', 'LangChain', 'LlamaIndex'],
      color: 'accent',
    },
    {
      id: 4,
      title: 'Big Data & ETL',
      description: 'Experienced in processing large-scale data, building ETL pipelines, and managing real-time data streams.',
      icon: <Palette className="w-6 h-6" />,
      technologies: ['Apache Spark', 'Apache Kafka', 'Apache Airflow', 'Informatica PowerCenter', 'Talend', 'Fivetran'],
      color: 'primary',
    },
    {
      id: 5,
      title: 'Cloud & DevOps',
      description: 'Capable of designing, deploying, and maintaining scalable cloud infrastructure with CI/CD practices.',
      icon: <Braces className="w-6 h-6" />,
      technologies: ['AWS', 'Google Cloud Platform', 'Azure', 'Docker', 'Kubernetes', 'Jenkins', 'Git', 'GitHub Actions'],
      color: 'secondary',
    },
    {
      id: 6,
      title: 'Data Architecture & Governance',
      description: 'Specialized in data modeling, architecture, quality, and governance for reliable and compliant analytics.',
      icon: <Monitor className="w-6 h-6" />,
      technologies: ['Dimensional Modeling', 'Data Vault 2.0', 'Star Schema Design', 'Schema Design', 'Slowly Changing Dimensions'],
      color: 'accent',
    },
  ];

  return (
    <section id="skills" ref={ref} className="py-20 md:py-32 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 rounded-full bg-primary-500/10 filter blur-3xl"
          style={{ y: y1, rotate: rotate1 }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-secondary-500/10 filter blur-3xl"
          style={{ y: y2, rotate: rotate2 }}
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
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            A collection of technologies, tools, and methodologies I've mastered throughout my career.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
            >
              <SkillCard skill={skill} />
            </motion.div>
          ))}
        </div>

        {/* Skill meter section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 glass rounded-xl p-8"
        >
          <h3 className="text-xl font-display font-bold text-white mb-8 text-center">
            Technical Proficiency
          </h3>

          <div className="space-y-6">
            {[
              { name: 'Agile', percentage: 95 },
              { name: 'Test-Driven Development', percentage: 90 },
              { name: 'Generative AI', percentage: 85 },
              { name: 'Infrastructure as Code', percentage: 80 },
              { name: 'Version Controls', percentage: 92 },
            ].map((item, index) => (
              <div key={index}>
                <div className="flex justify-between mb-2">
                  <span className="text-white/80">{item.name}</span>
                  <span className="text-white/60">{item.percentage}%</span>
                </div>
                <div className="w-full h-2 bg-dark-800 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-primary-500 to-secondary-500"
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${item.percentage}%` } : { width: 0 }}
                    transition={{ duration: 1, delay: 0.8 + index * 0.1 }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;