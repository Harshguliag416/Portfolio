import { motion } from "framer-motion";

import { styles } from "../../constants/styles";
import { fadeIn } from "../../utils/motion";
import { testimonials } from "../../constants";
import { Header } from "../atoms/Header";
import { TTestimonial } from "../../types";
import { config } from "../../constants/config";
import biLogo from "../../assets/company/bi.webp";
import hhtLogo from "../../assets/company/hht.png";

const FeedbackCard: React.FC<{ index: number } & TTestimonial> = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => {
  // Map logo identifiers to imported logos
  const logoMap: { [key: string]: string } = {
    hht: hhtLogo,
    bridgerton: biLogo,
  };

  const logoUrl = logoMap[image as string] || image;
  
  // Check if image is a URL (starts with http) or a local identifier
  const isImageUrl = typeof image === "string" && image.startsWith("http");
  
  // Get initials from name
  const getInitials = (fullName: string) => {
    return fullName
      .split(" ")
      .map((word) => word[0])
      .join("")
      .toUpperCase();
  };

  return (
    <motion.div
      variants={fadeIn("", "spring", index * 0.5, 0.75)}
      className="bg-black-200 xs:w-[320px] w-full rounded-3xl p-10"
    >
      <p className="text-[48px] font-black text-white">"</p>

      <div className="mt-1">
        <p className="text-[18px] tracking-wider text-white">{testimonial}</p>

        <div className="mt-7 flex items-center justify-between gap-1">
          <div className="flex flex-1 flex-col">
            <p className="text-[16px] font-medium text-white">
              <span className="blue-text-gradient">@</span> {name}
            </p>
            <p className="text-secondary mt-1 text-[12px]">
              {designation} {company ? `of ${company}` : ""}
            </p>
          </div>

          {isImageUrl ? (
            <img
              src={logoUrl}
              alt={`feedback_by-${name}`}
              className="h-10 w-10 rounded-full object-cover"
            />
          ) : (
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500 font-bold text-white">
              {getInitials(name)}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Feedbacks = () => {
  return (
    <div className="bg-black-100 mt-12 rounded-[20px]">
      <div
        className={`${styles.padding} bg-tertiary min-h-[300px] rounded-2xl`}
      >
        <Header useMotion={true} {...config.sections.feedbacks} />
      </div>
      <div
        className={`${styles.paddingX} -mt-20 flex flex-wrap gap-7 pb-14 max-sm:justify-center`}
      >
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default Feedbacks;
