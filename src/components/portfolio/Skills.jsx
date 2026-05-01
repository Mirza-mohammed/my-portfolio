import React from "react";
import * as Icons from "lucide-react";
import { SiPython, SiJavascript, SiMysql, SiGit, SiGithub, SiPandas, SiScikitlearn } from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { skillGroups } from "../../mock/mock";
import SectionHeading from "./SectionHeading";

const getSkillIcon = (skillName) => {
  const props = { className: "w-3.5 h-3.5 opacity-70 group-hover/item:opacity-100 transition-opacity" };
  switch (skillName) {
    case "Python": return <SiPython {...props} />;
    case "JavaScript": return <SiJavascript {...props} />;
    case "MySQL": return <SiMysql {...props} />;
    case "AWS": return <FaAws {...props} />;
    case "Git": return <SiGit {...props} />;
    case "GitHub": return <SiGithub {...props} />;
    case "Pandas": return <SiPandas {...props} />;
    case "Scikit-learn": return <SiScikitlearn {...props} />;
    case "SQL": return <Icons.Database {...props} />;
    case "Relational Design": return <Icons.Workflow {...props} />;
    case "DB-backed Apps": return <Icons.Server {...props} />;
    case "Deployment Workflows": return <Icons.Zap {...props} />;
    case "ETL Pipelines": return <Icons.Workflow {...props} />;
    case "Data Cleaning": return <Icons.CheckCircle2 {...props} />;
    case "Transformation": return <Icons.Code {...props} />;
    case "Validation": return <Icons.CheckSquare {...props} />;
    case "Predictive Analytics": return <Icons.LineChart {...props} />;
    case "Regression": return <Icons.TrendingUp {...props} />;
    case "Feature Engineering": return <Icons.Cpu {...props} />;
    case "SHAP": return <Icons.BarChart3 {...props} />;
    case "AppSheet": return <Icons.Smartphone {...props} />;
    case "Web Apps": return <Icons.LayoutTemplate {...props} />;
    case "Process Automation": return <Icons.Bot {...props} />;
    case "User-focused Dev": return <Icons.Users {...props} />;
    case "Problem-solving": return <Icons.Lightbulb {...props} />;
    case "Debugging": return <Icons.Bug {...props} />;
    case "Documentation": return <Icons.FileText {...props} />;
    case "Teamwork": return <Icons.Users2 {...props} />;
    case "Communication": return <Icons.MessageSquare {...props} />;
    default: return <Icons.Check {...props} />;
  }
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-24 lg:py-32 relative bg-zinc-950/40 border-y border-zinc-900"
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <SectionHeading
          eyebrow="02 / skills"
          title="Technical Arsenal."
          description="The core languages, frameworks, and methodologies I rely on to engineer dependable software and robust data pipelines."
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group) => {
            const getGroupIcon = (iconName) => {
              switch (iconName) {
                case "Code2": return Icons.Code2;
                case "Database": return Icons.Database;
                case "Cloud": return Icons.Cloud;
                case "Workflow": return Icons.Workflow;
                case "LineChart": return Icons.LineChart;
                case "AppWindow": return Icons.AppWindow;
                case "Users": return Icons.Users;
                default: return Icons.Sparkles;
              }
            };
            const Icon = getGroupIcon(group.icon);
            
            return (
              <div
                key={group.title}
                className="group relative rounded-2xl border border-zinc-800 bg-zinc-900/40 backdrop-blur-sm p-6 hover:-translate-y-1 hover:border-emerald-500/40 hover:bg-zinc-800/60 hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-500 overflow-hidden flex flex-col h-full"
              >
                {/* Subtle top gradient line on hover */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-center text-zinc-400 group-hover:text-emerald-400 group-hover:border-emerald-500/30 group-hover:bg-emerald-500/10 transition-colors duration-500">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-display text-xl font-bold text-zinc-100 group-hover:text-white transition-colors">
                      {group.title}
                    </h3>
                  </div>
                </div>
                
                <p className="text-sm text-zinc-400 leading-relaxed mb-6 flex-grow">
                  {group.description}
                </p>

                <div className="mt-auto pt-4 border-t border-zinc-800/50">
                  <ul className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="group/item flex items-center gap-1.5 text-xs font-medium text-zinc-300 bg-zinc-950/80 border border-zinc-800 rounded-md px-2.5 py-1.5 hover:border-emerald-500/40 hover:text-emerald-300 transition-colors cursor-default"
                      >
                        {getSkillIcon(item)}
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
