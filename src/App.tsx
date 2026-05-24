import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { translations } from './locales';
import { 
  Globe, Mail, MapPin, Award, BookOpen, Briefcase, 
  ChevronRight, User, Download, GraduationCap, Calendar, CheckCircle2,
  Menu, X, Phone, ArrowRight, Play, Facebook, Twitter, Instagram, Globe2, Linkedin,
  Trophy, Medal, Star, Mic, UploadCloud, Trash2, Plus, Check, Cpu, Sparkles
} from 'lucide-react';

const extraT = {
  vi: {
    home: "Trang chủ",
    learnMore: "Khám phá thêm",
    contactMe: "Liên hệ tôi",
    services: "Năng lực cốt lõi",
    aboutTitle: "",
    aboutSubTitle: "Chú trọng trải nghiệm thực tiễn",
    workProcess: "Quy trình làm việc",
    portfolio: "Portfolio",
    stayInTouch: "Giữ liên lạc",
    sendMessage: "Gửi Email",
    getInTouch: "Kết Nối",
    messageMe: "Email Cho Tôi",
    contactText: "Hãy liên hệ với tôi để cùng tạo ra những chương trình đào tạo giá trị và mang tính thực tiễn cao cho tổ chức của bạn.",
    skills: {
      s1: "Đào tạo kỹ năng",
      s2: "Thiết kế bài giảng & trải nghiệm học tập",
      s3: "Host & MC sự kiện đào tạo",
      s4: "Tham vấn"
    },
    aboutMeTitle: "Về Tôi",
    servicesHeader: "Dịch Vụ Tôi Cung Cấp",
    portfolioSubHeader: "Các khóa đào tạo kỹ năng, Các Dự án đào tạo với trải nghiệm sáng tạo",
    portfolioTeachingTitle: "Công tác Giảng dạy & Đào tạo",
    portfolioProjectsTitle: "Các dự án, sự kiện đào tạo, truyền thông",
    phoneTitle: "Điện thoại",
    locationTitle: "Địa điểm",
    emailTitle: "Email",
    eduSubPageTitle: "Học vấn & chứng chỉ năng lực",
    eduSubPageSubtitle: "Chi tiết lộ trình học tập, chứng chỉ chuyên môn và hệ thống năng lực chính thức.",
    backToHome: "Quay về trang chủ",
    addCertTitle: "Tải lên bằng cấp / chứng chỉ mới",
    certTitlePlaceholder: "Tên bằng cấp, chứng chỉ (VD: IELTS, Train The Trainer...)",
    certIssuerPlaceholder: "Đơn vị đào tạo, cấp bằng (VD: Đại học Tôn Đức Thắng, HDBank...)",
    certYearPlaceholder: "Năm cấp hoàn tất",
    uploadAreaTitle: "Kéo thả hình ảnh chứng chỉ vào đây hoặc bấm để chọn tệp",
    uploadAreaSub: "Hỗ trợ định dạng hình ảnh JPG, PNG, WEBP lên đến 10MB. Sẽ được lưu trữ an toàn trong trình duyệt của bạn.",
    btnSubmitCert: "Thêm Chứng Chỉ Số",
    btnSubmiting: "Đang xử lý...",
    certGalleryTitle: "Chứng Chỉ Năng Lực",
    certGallerySubtitle: "Danh sách chứng chỉ chuyên môn, nghiệp vụ đào tạo và hệ thống năng lực chính thức.",
    filterAll: "Tất cả văn bằng",
    filterAcademic: "Học vị / Văn bằng",
    filterSkills: "Kỹ năng L&D",
    filterAiTech: "AI & Công nghệ",
    filterSupporting: "Bổ trợ liên quan",
    certAcademicBadge: "Chính quy",
    certSkillsBadge: "Chuyên môn L&D",
    certAiBadge: "Trí tuệ nhân tạo",
    certSupportingBadge: "Kỹ năng mềm",
    deleteCert: "Gỡ bỏ",
    alertFillAll: "Vui lòng nhập đầy đủ thông tin tên chứng chỉ, đơn vị cấp, năm cấp và tải lên hình ảnh!",
    alertAddSuccess: "Thêm chứng chỉ thành công và lưu trữ lâu dài!",
    customUploadLabel: "Văn bằng của bạn",
    verifySeal: "Tem Xác Thực Đào Tạo",
    studentLabel: "Học viên",
    signatureBoard: "HỘI ĐỒNG THẨM ĐỊNH",
    signatureDirector: "GIÁM ĐỐC CHƯƠNG TRÌNH",
    officialCredential: "Mã kiểm tra"
  },
  en: {
    home: "Home",
    learnMore: "Learn More",
    contactMe: "Contact Me",
    services: "Core Capabilities",
    aboutTitle: "",
    aboutSubTitle: "Focusing on practical experiences",
    workProcess: "Working Process",
    portfolio: "Portfolio",
    stayInTouch: "Stay In Touch",
    sendMessage: "Send Email",
    getInTouch: "Get In Touch",
    messageMe: "Email Me",
    contactText: "Feel free to reach out to create valuable and highly practical training programs for your organization.",
    skills: {
      s1: "Skills Training",
      s2: "Curriculum & Learning Experience Design",
      s3: "Training Events MC & Hosting",
      s4: "Consultation"
    },
    aboutMeTitle: "About Me",
    servicesHeader: "What Services I'm Providing",
    portfolioSubHeader: "Skill training programs and training projects with creative experiences",
    portfolioTeachingTitle: "Teaching & Instructional Activities",
    portfolioProjectsTitle: "Projects, Training Events & Media",
    phoneTitle: "Phone",
    locationTitle: "Location",
    emailTitle: "Email",
    eduSubPageTitle: "Education & Competency Credentials",
    eduSubPageSubtitle: "Comprehensive profile of academic paths, soft skills training and professional verifications.",
    backToHome: "Return to Home",
    addCertTitle: "Upload New Degree / Certificate",
    certTitlePlaceholder: "Certificate name (e.g., IELTS, Train The Trainer...)",
    certIssuerPlaceholder: "Issuing institution (e.g., Ton Duc Thang University, HDBank...)",
    certYearPlaceholder: "Graduation / Completion year",
    uploadAreaTitle: "Drag & drop credential image here or click to browse",
    uploadAreaSub: "Supports JPG, PNG, WEBP files up to 10MB. Safely preserved in your local secure browser cache.",
    btnSubmitCert: "Register Digital Degree",
    btnSubmiting: "Processing...",
    certGalleryTitle: "Competency Credentials",
    certGallerySubtitle: "Professional credentials, instructional certifications, and corporate competency achievements.",
    filterAll: "All Credentials",
    filterAcademic: "Academic Degrees",
    filterSkills: "L&D Skills",
    filterAiTech: "AI & Tech",
    filterSupporting: "Supporting Skills",
    certAcademicBadge: "Academic",
    certSkillsBadge: "L&D Specialty",
    certAiBadge: "AI Technology",
    certSupportingBadge: "Soft Skills",
    deleteCert: "Remove",
    alertFillAll: "Please enter title, issuer, year, and select a valid image file!",
    alertAddSuccess: "Certificate successfully registered and saved!",
    customUploadLabel: "Your Credentials",
    verifySeal: "Verified Certification Seal",
    studentLabel: "Awarded To",
    signatureBoard: "APPRAISAL COMMITTEE",
    signatureDirector: "PROGRAM DIRECTOR",
    officialCredential: "Credential ID"
  }
};

const defaultCerts = [
  {
    id: "skills-hr-spec",
    titleVi: "Chứng nhận Chuyên viên nhân sự",
    titleEn: "Professional Human Resources (HR) Specialist Certification",
    issuerVi: "Trung tâm Đào tạo Phát triển Xã hội",
    issuerEn: "Social Development Training Center",
    year: "2020",
    category: "skills",
    isDefault: true,
    gradeVi: "Xếp loại Giỏi - Am hiểu sâu sắc về Luật lao động & Quản trị nhân sự hiện đại",
    gradeEn: "Passed with Distinction - Corporate Labor Law & Modern Talent Management",
    credentialId: "HRA-HRS-2020-085",
    majorVi: "Quan hệ lao động, đào tạo tuyển dụng, C&B và tổ chức nhân sự",
    majorEn: "Employee Relations, Recruiting & Corporate HR Architecture"
  },
  {
    id: "skills-ttt",
    titleVi: "Chứng nhận giảng viên nội bộ",
    titleEn: "Professional Internal Trainer Certification (Train The Trainer)",
    issuerVi: "Learn Smart",
    issuerEn: "Learn Smart",
    year: "2022",
    category: "skills",
    isDefault: true,
    gradeVi: "Hạng Xuất Sắc - Hoàn thiện toàn diện năng lực sư phạm đứng lớp",
    gradeEn: "Excellent levels - Perfected adult learning didactic methodology",
    credentialId: "HDB-TTT-2022-482",
    majorVi: "Phương pháp giảng dạy hiện đại, hoạt náo và làm chủ lớp học",
    majorEn: "Modern Adult Facilitation & Dynamic Workshop Control"
  },
  {
    id: "skills-train-mgmt",
    titleVi: "Chứng nhận Quản lý đào tạo doanh nghiệp",
    titleEn: "Corporate Training & Development Management Certificate",
    issuerVi: "Thinking School",
    issuerEn: "Thinking School",
    year: "2023",
    category: "skills",
    isDefault: true,
    gradeVi: "Xây dựng bản đồ học tập & Quản lý hiệu suất đào tạo L&D",
    gradeEn: "Training Performance KPI Management & Corporate Learning Map Design",
    credentialId: "L&D-MAN-2023-119",
    majorVi: "Xác định nhu cầu đào tạo (TNA) và đánh giá hiệu quả theo tháp Kirkpatrick",
    majorEn: "Training Needs Analysis (TNA) & Kirkpatrick Evaluation Model"
  },
  {
    id: "skills-agile",
    titleVi: "Chứng chỉ quản lý dự án Agile",
    titleEn: "Certified Agile Project Management Professional",
    issuerVi: "Học viện Agile",
    issuerEn: "Agile Academy",
    year: "2023",
    category: "skills",
    isDefault: true,
    gradeVi: "Thực hành chuẩn mô hình Scrum & Kanban ứng dụng doanh nghiệp",
    gradeEn: "Proficient in Scrum, Kanban & Iterative Development methodologies",
    credentialId: "AGL-PSM-2023-772",
    majorVi: "Quản trị nhịp độ dự án, thúc đẩy cộng tác, tối ưu hóa năng suất nhóm",
    majorEn: "Sprints Management, Team Collaboration & Productivity Optimization"
  },
  {
    id: "skills-lad",
    titleVi: "Chứng nhận Thiết kế hoạt động (LAD) học",
    titleEn: "The Learning Activity Design Course Certification (LAD)",
    issuerVi: "Gamedaotao.vn",
    issuerEn: "Gamedaotao.vn",
    year: "2023",
    category: "skills",
    isDefault: true,
    gradeVi: "Kỹ thuật tương tác đa chiều, gamification trong bài giảng chuyên sâu",
    gradeEn: "Interactive engagement, Gamification & Experiential Learning setup",
    credentialId: "SYS-LAD-2023-382",
    majorVi: "Tổ chức trò chơi mô phỏng và kiến trúc hoạt động kích thích tư duy học viên",
    majorEn: "Simulation design, active learning templates and learner engagement tactics"
  },
  {
    id: "skills-rid",
    titleVi: "Chứng nhận Thiết kế chương trình tinh gọn (RID)",
    titleEn: "The Rapid Instructional Design Course Certification (RID)",
    issuerVi: "Gamedaotao.vn",
    issuerEn: "Gamedaotao.vn",
    year: "2023",
    category: "skills",
    isDefault: true,
    gradeVi: "Ứng dụng mô hình ADDIE & SAM thiết kế giải pháp học tập cấp tốc",
    gradeEn: "ADDIE & SAM Models for Speed-to-Market Learning Curriculums",
    credentialId: "SYS-RID-2023-195",
    majorVi: "Sản xuất nhanh học liệu, kịch bản e-learning và phân rã bài giảng",
    majorEn: "Rapid prototyping, e-learning storyboarding & courseware modularization"
  },
  {
    id: "skills-coaching",
    titleVi: "Chứng nhận kỹ năng coaching",
    titleEn: "Professional Coaching Skills Certification (Coaching Course)",
    issuerVi: "Trung tâm đào tạo HDBank",
    issuerEn: "HDBank Training Center",
    year: "2023",
    category: "skills",
    isDefault: true,
    gradeVi: "Hoàn thành xuất sắc khóa học - Làm chủ bộ năng lực khai vấn tiêu chuẩn quốc tế",
    gradeEn: "Completed with Distinction - Mastered standard professional coaching competencies",
    credentialId: "ICF-COACH-2023-112",
    majorVi: "Kỹ thuật lắng nghe thấu cảm, đặt câu hỏi khai phóng tiềm năng và đồng kiến tạo bàn tròn giải pháp",
    majorEn: "Active listening, powerful questioning, transformative inquiry & co-creative problem solving"
  },
  {
    id: "supp-psy",
    titleVi: "Chứng nhận Chuyên viên tham vấn tâm lý",
    titleEn: "Certified Psychological Counseling Specialist",
    issuerVi: "Viện ứng dụng khoa học tâm lý - giáo dục",
    issuerEn: "Institute of Applied Psycho-Educational Sciences",
    year: "2021",
    category: "supporting",
    isDefault: true,
    gradeVi: "Kỹ năng trị liệu tâm lý cá nhân, thấu cảm và định hướng hành vi",
    gradeEn: "Interpersonal therapy skills, active listening & behavioral guidance",
    credentialId: "VIPC-PSY-2021-309",
    majorVi: "Tham vấn học đường, giải tỏa áp lực công sở và cân bằng cuộc sống",
    majorEn: "School counseling, workplace stress mediation & mental well-being"
  },
  {
    id: "supp-ext-rel",
    titleVi: "Chứng nhận trợ lý đối ngoại",
    titleEn: "Professional External Relations Assistant Certification",
    issuerVi: "Trung tâm bồi dưỡng thuộc bộ ngoại giao",
    issuerEn: "Diplomatic Training Center, Ministry of Foreign Affairs",
    year: "2020",
    category: "supporting",
    isDefault: true,
    gradeVi: "Nghiệp vụ lễ tân ngoại giao, đàm phán thương vụ & xử lý thông tin",
    gradeEn: "Diplomatic protocol, corporate negotiation & communications handler",
    credentialId: "DIP-ERA-2020-554",
    majorVi: "Xây dựng liên kết đối tác chiến lược, truyền thông ngoại giao",
    majorEn: "Strategic partnership networking, diplomatic writing & public relations"
  },
  {
    id: "supp-public-speak",
    titleVi: "Public Speaking and Emceeing Mastery Program",
    titleEn: "Public Speaking & Emceeing Mastery Program Certification",
    issuerVi: "Học viện 6W & MC Thanh Bạch",
    issuerEn: "6W Academy & MC Thanh Bach",
    year: "2021",
    category: "supporting",
    isDefault: true,
    gradeVi: "Xếp loại Thủ khoa - Làm chủ sân khấu lớn và xử lý tình huống trực tiếp",
    gradeEn: "Valedictorian - Grand stage presence, crowd management & live improvisation",
    credentialId: "VMA-PSE-2021-99",
    majorVi: "Kiến trúc bài nói thuyết phục, điều phối sự kiện & hội thảo quốc tế",
    majorEn: "Persuasive speech structuring, international conference hosting & moderation"
  },
  {
    id: "supp-voice",
    titleVi: "Chứng nhận Train your Voice",
    titleEn: "Certified Master Practitioner of Voice & Speech (Train Your Voice)",
    issuerVi: "Học viện Ngôn ngữ Sun & Moon, MC Thanh Thảo",
    issuerEn: "Sun & Moon Language Academy & MC Thanh Thao",
    year: "2021",
    category: "supporting",
    isDefault: true,
    gradeVi: "Cải thiện giọng nói, kiểm soát cột hơi bụng và truyền cảm hứng",
    gradeEn: "Mastered diaphragmatic breathing, tone resonance & expressive articulation",
    credentialId: "VSV-TYV-2021-224",
    majorVi: "Sửa phát âm ngọng, làm chủ nhịp điệu nói và cảm xúc lời thoại",
    majorEn: "Accent neutralization, speech rhythm pacing & emotional vocal colors"
  },
  {
    id: "ai-design-thinking",
    titleVi: "Chứng nhận Chuyển đổi số Design Thinking",
    titleEn: "Design Thinking for Digital Transformation Certification",
    issuerVi: "FPT",
    issuerEn: "FPT",
    year: "2024",
    category: "ai",
    isDefault: true,
    gradeVi: "Giải quyết vấn đề bằng phương pháp lấy người dùng làm trung tâm",
    gradeEn: "Human-Centered Problem Solving methodology for Enterprise scale",
    credentialId: "HDB-DTDX-2024-902",
    majorVi: "Xây dựng bản mẫu thử nghiệm nhanh (Prototyping) và tư duy đột phá",
    majorEn: "Rapid prototyping cycle, empathy mapping & divergent thinking execution"
  },
  {
    id: "ai-gemini-educator",
    titleVi: "Gemini Certified Educator",
    titleEn: "Gemini Certified Educator",
    issuerVi: "Google Academy",
    issuerEn: "Google Academy",
    year: "2024",
    category: "ai",
    isDefault: true,
    gradeVi: "Hoàn thành xuất sắc - Tích hợp trí tuệ nhân tạo nâng cao vào quản lý lớp học và thiết kế giáo án",
    gradeEn: "Excellent - Successfully integrated generative AI into classroom management & lesson drafting",
    credentialId: "G-EDU-AI-2024-085",
    majorVi: "Ứng dụng mô hình ngôn ngữ lớn (LLM), thiết kế câu lệnh prompts tối ưu cho giảng dạy",
    majorEn: "Advanced Large Language Model applications, prompt engineering for educators"
  },
  {
    id: "ai-mkt-sales",
    titleVi: "AI Application for Marketing and Sales",
    titleEn: "AI Application for Marketing and Sales Certification",
    issuerVi: "ISB",
    issuerEn: "ISB",
    year: "2024",
    category: "ai",
    isDefault: true,
    gradeVi: "Tối ưu hóa phễu chuyển đổi và tự động hóa chuỗi chiến dịch quảng bá",
    gradeEn: "Conversion funnel optimization & automated marketing campaigns mastery",
    credentialId: "AI-MKT-2024-118",
    majorVi: "Phân tích dữ liệu hành vi, sáng tạo nội dung đa phương tiện tự động và dự báo bán hàng",
    majorEn: "Behavioral data analysis, generative media content creation & sales forecasting using AI"
  },
  {
    id: "ai-essentials",
    titleVi: "Artificial Intelligence Essentials",
    titleEn: "Artificial Intelligence Essentials Certificate",
    issuerVi: "TMC Academy, Singapore",
    issuerEn: "TMC Academy, Singapore",
    year: "2024",
    category: "ai",
    isDefault: true,
    gradeVi: "Chứng nhận nền tảng chuyên sâu - Am hiểu nguyên tắc cốt lõi của Machine Learning & Deep Learning",
    gradeEn: "Foundational Specialist Badge - Mastery of core Machine Learning & Deep Learning principles",
    credentialId: "AI-ESS-2024-406",
    majorVi: "Nguyên lý học máy, kỹ thuật xử lý ngôn ngữ tự nhiên (NLP) và đạo đức ứng dụng AI",
    majorEn: "Machine learning workflows, NLP foundational tech & ethical AI frameworks"
  }
];

export default function App() {
  const [lang, setLang] = useState<'vi' | 'en'>('vi');
  const t = translations[lang];
  const et = (extraT as any)[lang];
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [selectedImg, setSelectedImg] = useState<string | null>(null);
  
  // Navigation View State
  const [currentView, setCurrentView] = useState<'home' | 'education'>('home');
  
  // Certifications Gallery State
  const [customCerts, setCustomCerts] = useState<any[]>(() => {
    try {
      const saved = localStorage.getItem('bn_uploaded_certs');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  });

  // Highlight/Filter Certs
  const [certFilter, setCertFilter] = useState<string>('all');
  
  // Selected virtual built-in certificate details
  const [selectedVirtualCert, setSelectedVirtualCert] = useState<any | null>(null);

  // Form State
  const [newTitle, setNewTitle] = useState('');
  const [newIssuer, setNewIssuer] = useState('');
  const [newYear, setNewYear] = useState('');
  const [newCategory, setNewCategory] = useState<'academic' | 'skills' | 'ai' | 'supporting'>('skills');
  const [newImage, setNewImage] = useState<string | null>(null);
  const [isDragOver, setIsDragOver] = useState(false);
  const [alert, setAlert] = useState<{ message: string; type: 'success' | 'detail' } | null>(null);

  // Handle cross-page scrolling
  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    if (id === 'education') {
      setCurrentView('education');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    
    if (currentView !== 'home') {
      setCurrentView('home');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          const y = element.getBoundingClientRect().top + window.scrollY - 80;
          window.scrollTo({ top: y, behavior: 'smooth' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        const y = element.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
  };

  // Safe file reader converting binary to base64
  const handleFileChange = (file: File) => {
    if (file.size > 10 * 1024 * 1024) {
      alert("Kích thước file quá lớn (tối đa 10MB) / File is too large (max 10MB)");
      return;
    }
    const reader = new FileReader();
    reader.onloadend = () => {
      setNewImage(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  // Submit and persistent write custom certificates to localStorage
  const handleAddCertificate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle || !newIssuer || !newYear || !newImage) {
      setAlert({ message: et.alertFillAll, type: 'detail' });
      return;
    }
    
    const newCert = {
      id: "custom-" + Date.now(),
      titleVi: newTitle,
      titleEn: newTitle,
      issuerVi: newIssuer,
      issuerEn: newIssuer,
      year: newYear,
      category: newCategory,
      isDefault: false,
      image: newImage
    };
    
    const updated = [newCert, ...customCerts];
    setCustomCerts(updated);
    try {
      localStorage.setItem('bn_uploaded_certs', JSON.stringify(updated));
    } catch (err) {
      console.warn("Storage quota might be exceeded", err);
    }
    
    // Clear form inputs
    setNewTitle('');
    setNewIssuer('');
    setNewYear('');
    setNewImage(null);
    setAlert({ message: et.alertAddSuccess, type: 'success' });
    setTimeout(() => {
      setAlert(null);
    }, 4000);
  };

  // Delete persistent certificate
  const handleDeleteCertificate = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const updated = customCerts.filter(c => c.id !== id);
    setCustomCerts(updated);
    try {
      localStorage.setItem('bn_uploaded_certs', JSON.stringify(updated));
    } catch (err) {
      console.warn(err);
    }
  };

  const teachingImages = [
    "https://i.ibb.co/BHTHPhVg/z7761940181424-d0ff521315afb78e438e05b30728d66e.jpg",
    "https://i.ibb.co/jv7dkz5Q/z7761940202956-d1c5f091bad06852134768ad38d0a7f7.jpg",
    "https://i.ibb.co/tMwNPXjb/z7761940029149-3ad57d294ec8c0d817e3f3be9395970c.jpg",
    "https://i.ibb.co/TqnQdL6X/DSC01906.jpg",
    "https://i.ibb.co/Pz1GvH7z/z7761940154939-3d6b5c56e5f9f3f21197d42e1bc94c4f.jpg",
    "https://i.ibb.co/ns59yZfJ/z7761940171079-6ade96dcc1406c7277f77c1a77203aec.jpg",
    "https://i.ibb.co/27Jv3F1B/504891935-2558701647799256-6395134836408376345-n.jpg",
    "https://i.ibb.co/RpKn7Tgw/IMG-4113.jpg",
    "https://i.ibb.co/chQB6sJh/504531646-2559005667768854-6096682446525964551-n.jpg"
  ];

  const projectImages = [
    "https://i.ibb.co/HDKD6Hvc/z7761940194365-49fcebd994c34f0560810283bd2c4e60.jpg",
    "https://i.ibb.co/q3T3z1FB/z7761940203237-5e335612079c734bf6f34b0ea18330ef.jpg",
    "https://i.ibb.co/217BqrSW/z7761940054387-b12ab3260d1d9cd9651c7debb3c9598d.jpg",
    "https://i.ibb.co/tTqT87gc/z7761940072462-7cadb80b6dbdcf7073a5a8afe3e5d055.jpg",
    "https://i.ibb.co/RG2wJS1P/z7762007210860-e4b32427a021af85a3ef9773958712cf.jpg",
    "https://i.ibb.co/k2tWsdSp/z7761940185603-9d714f673bacc6b11cd9cc2c9dd51068.jpg",
    "https://i.ibb.co/3ZH3yMc/z7762056591891-f5705d89dc97724779e682322b202d9f.jpg",
    "https://i.ibb.co/1fyfh77n/z7762056617028-b7829e232476cf94e9d9c6df787cd930.jpg",
    "https://i.ibb.co/Q39gGv0Q/z7762056551083-fac8f2f47292ae0e4994fe1cbdedbfd1.jpg",
    "https://i.ibb.co/WvCPsGL8/z7762086970535-9d49450de87b784ffdd15fe428d3fe8b.jpg",
    "https://i.ibb.co/JWpdQtZ6/z7762086995209-6c8996c963f0696ab8325d3aa160c38e.jpg",
    "https://i.ibb.co/bjKgHqtH/z7762091553113-fa1420ee94dedea77335b7630f71fb5c.jpg"
  ];

  return (
    <div className="min-h-screen bg-[#faf8f5] text-[#4a413a] font-sans selection:bg-brand-gold selection:text-white">
      {/* Header - Fixed Premium Espresso Bar pushed to the absolute top */}
      <div className="fixed top-0 left-0 right-0 w-full z-50 flex justify-between items-center bg-[#1e1a17] text-[#faf7f2] border-b border-brand-gold/10 px-6 md:px-12 py-4.5 transition-all duration-300 shadow-md">
        {/* Logo - Elegant Serif Branding matching the custom monogram logo */}
        <div className="flex items-center gap-1 cursor-pointer select-none group" onClick={() => scrollTo('hero')}>
          <div className="flex items-center justify-center">
            {/* Left label: BICH */}
            <span className="text-[10px] md:text-[11px] uppercase tracking-[0.3em] text-[#ebdcca]/80 group-hover:text-white font-sans transition-colors duration-300 font-normal pr-1.5 pt-[2px]">
              BICH
            </span>
            
            {/* Overlapping Serif Monogram: BN */}
            <div className="relative w-11 h-11 flex items-center justify-center -my-2 overflow-visible">
              {/* Letter B */}
              <span className="absolute text-[36px] font-serif text-[#ebdcca] font-normal leading-none select-none translate-x-[-6px] translate-y-[-1px] transition-colors duration-300">
                B
              </span>
              {/* Letter N */}
              <span className="absolute text-[36px] font-serif text-[#aa9581] font-light leading-none select-none translate-x-[5px] translate-y-[1px] transition-colors duration-300 opacity-95">
                N
              </span>
            </div>

            {/* Right label: NGAN */}
            <span className="text-[10px] md:text-[11px] uppercase tracking-[0.3em] text-[#ebdcca]/80 group-hover:text-white font-sans transition-colors duration-300 font-normal pl-1.5 pt-[2px]">
              NGAN
            </span>
          </div>
        </div>

        {/* Desktop Nav - Clean styled flat text links sits on the dark menu bar */}
        <nav className="hidden md:flex items-center gap-8 text-[11px] font-semibold tracking-widest uppercase">
          <button onClick={() => scrollTo('hero')} className={`transition-colors cursor-pointer ${currentView === 'home' ? 'text-[#ebdcca]' : 'text-slate-300 hover:text-[#ebdcca]'}`}>{et.home}</button>
          
          {/* Giới thiệu Dropdown */}
          <div 
            className="relative py-0.5 group"
            onMouseEnter={() => setAboutDropdownOpen(true)}
            onMouseLeave={() => setAboutDropdownOpen(false)}
          >
            <button 
              onClick={() => {
                scrollTo('about');
                setAboutDropdownOpen(!aboutDropdownOpen);
              }} 
              className={`transition-colors flex items-center gap-1 focus:outline-none cursor-pointer ${currentView === 'home' && aboutDropdownOpen ? 'text-[#ebdcca]' : 'text-slate-300 hover:text-[#ebdcca]'}`}
            >
              {t.nav.about}
              <svg className={`w-3 h-3 transition-transform duration-200 ${aboutDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            
            {/* Dropdown Menu */}
            {aboutDropdownOpen && (
              <div className="absolute left-1/2 -translate-x-1/2 mt-3 w-40 bg-[#1e1a17] border border-brand-gold/20 shadow-xl py-2.5 z-50 rounded-lg">
                <button 
                  onClick={() => { scrollTo('about'); setAboutDropdownOpen(false); }} 
                  className="w-full text-center px-4 py-2 text-[10px] font-bold tracking-widest text-slate-300 hover:text-[#ebdcca] hover:bg-[#322822]/40 transition-colors block"
                >
                  {lang === 'vi' ? 'VỀ TÔI' : 'ABOUT ME'}
                </button>
                <button 
                  onClick={() => { scrollTo('portfolio'); setAboutDropdownOpen(false); }} 
                  className="w-full text-center px-4 py-2 text-[10px] font-bold tracking-widest text-slate-300 hover:text-[#ebdcca] hover:bg-[#322822]/40 transition-colors block"
                >
                  {lang === 'vi' ? 'PORTFOLIO' : 'PORTFOLIO'}
                </button>
                <button 
                  onClick={() => { scrollTo('contact'); setAboutDropdownOpen(false); }} 
                  className="w-full text-center px-4 py-2 text-[10px] font-bold tracking-widest text-[#faf7f2] hover:text-[#ebdcca] hover:bg-[#322822]/40 transition-colors block"
                >
                  {lang === 'vi' ? 'LIÊN HỆ' : 'CONTACT'}
                </button>
              </div>
            )}
          </div>

          <button onClick={() => scrollTo('education')} className={`transition-colors cursor-pointer ${currentView === 'education' ? 'text-[#ebdcca]' : 'text-slate-300 hover:text-[#ebdcca]'}`}>{t.nav.education}</button>
        </nav>

        {/* Desktop Language Selector in Elegant Capsule pill */}
        <div className="hidden md:flex">
          <button 
            onClick={() => setLang(lang === 'vi' ? 'en' : 'vi')}
            className="border border-[#ebdcca]/40 hover:border-[#ebdcca] hover:bg-[#ebdcca]/10 text-[#ebdcca] transition-all flex items-center gap-1.5 text-[10px] font-bold tracking-widest px-4 py-2 rounded-full cursor-pointer uppercase"
          >
            <Globe size={12}/> {lang === 'vi' ? 'ENGLISH' : 'TIẾNG VIỆT'}
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-[#ebdcca]/90 focus:outline-none cursor-pointer" onClick={() => setMobileMenuOpen(true)}>
          <Menu size={26} />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[#1e1a17] p-6 flex flex-col justify-between text-[#faf7f2]">
          <div>
            <div className="flex justify-between items-center mb-10 h-12">
              <div className="flex items-center select-none" onClick={() => { scrollTo('hero'); setMobileMenuOpen(false); }}>
                <span className="text-[9px] uppercase tracking-[0.25em] text-[#ebdcca]/70 font-semibold font-sans pt-1 pr-1.5">
                  BICH
                </span>
                
                <div className="relative w-10 h-10 flex items-center justify-center -my-2 overflow-visible">
                  <span className="absolute text-[32px] font-serif text-[#ebdcca] font-normal leading-none select-none translate-x-[-5px] translate-y-[-1px]">
                    B
                  </span>
                  <span className="absolute text-[32px] font-serif text-[#aa9581] font-light leading-none select-none translate-x-[4px] translate-y-[1px] opacity-95">
                    N
                  </span>
                </div>

                <span className="text-[9px] uppercase tracking-[0.25em] text-[#ebdcca]/70 font-semibold font-sans pt-1 pl-1.5">
                  NGAN
                </span>
              </div>
              <button onClick={() => setMobileMenuOpen(false)} className="text-[#ebdcca] focus:outline-none"><X size={28}/></button>
            </div>
            
            <nav className="flex flex-col gap-6 text-sm font-bold tracking-widest text-slate-300 uppercase">
              <button onClick={() => { scrollTo('hero'); setMobileMenuOpen(false); }} className={`text-left uppercase tracking-wider ${currentView === 'home' ? 'text-[#ebdcca] font-bold' : ''}`}>{et.home}</button>
              
              {/* Giới thiệu nested list */}
              <div className="flex flex-col">
                <button 
                  onClick={() => setMobileAboutOpen(!mobileAboutOpen)} 
                  className="text-left flex items-center justify-between w-full uppercase tracking-wider text-slate-300 py-1"
                >
                  <span>{t.nav.about}</span>
                  <svg className={`w-4 h-4 transition-transform duration-200 ${mobileAboutOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
                
                {mobileAboutOpen && (
                  <div className="pl-4 mt-2 flex flex-col gap-3 border-l-2 border-[#ebdcca]/30 py-1">
                    <button onClick={() => { scrollTo('about'); setMobileMenuOpen(false); }} className="text-left text-xs font-semibold text-slate-400 hover:text-[#ebdcca] uppercase tracking-wider">{lang === 'vi' ? 'Về tôi' : 'About Me'}</button>
                    <button onClick={() => { scrollTo('portfolio'); setMobileMenuOpen(false); }} className="text-left text-xs font-semibold text-slate-400 hover:text-[#ebdcca] uppercase tracking-wider">{et.portfolio}</button>
                    <button onClick={() => { scrollTo('contact'); setMobileMenuOpen(false); }} className="text-left text-xs font-semibold text-slate-400 hover:text-[#ebdcca] uppercase tracking-wider">{t.nav.contact}</button>
                  </div>
                )}
              </div>

              <button onClick={() => { scrollTo('education'); setMobileMenuOpen(false); }} className={`text-left uppercase tracking-wider ${currentView === 'education' ? 'text-[#ebdcca] font-bold' : ''}`}>{t.nav.education}</button>
            </nav>
          </div>

          <div className="border-t border-slate-800 pt-6">
            <button 
              onClick={() => {setLang(lang === 'vi' ? 'en' : 'vi'); setMobileMenuOpen(false);}} 
              className="text-left flex gap-2 items-center text-[#1e1a17] font-bold uppercase text-xs tracking-widest bg-[#ebdcca] px-6 py-4 rounded-full w-full justify-center hover:bg-white transition-all duration-300"
            >
              <Globe size={16}/> {lang === 'vi' ? 'Switch to English' : 'Đổi sang Tiếng Việt'}
            </button>
          </div>
        </div>
      )}

      {currentView === 'home' ? (
        <>
          {/* Hero Section - Designed as an editorial cover-banner split layout exactly like the Audrey mockup */}
          <section id="hero" className="pt-24 lg:pt-28 pb-16 lg:pb-24 bg-[#faf8f5] overflow-hidden relative">
            {/* Soft decorative background circles */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#ebdcca]/15 rounded-full blur-[100px] pointer-events-none -z-10"></div>
            
            <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              {/* Left Column - Core Statement, Divider, Subtext and Buttons */}
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-7 pb-6 lg:pb-0"
              >
                {/* Small luxury visual branding credit */}
                <div className="inline-flex items-center gap-2 mb-6 border border-brand-gold/30 px-3 py-1 rounded-full bg-[#f4efe9]/80">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-red inline-block"></span>
                  <span className="text-[9px] uppercase tracking-[0.2em] text-[#aa9581] font-bold">
                    {lang === 'vi' ? 'GIẢNG VIÊN ĐÀO TẠO • HÀNH TRÌNH CHUYÊN NGHIỆP' : 'L&D TRAINER • PROFESSIONAL PROFILE'}
                  </span>
                </div>

                {/* Elegant, impactful brand statement */}
                <h1 className="font-serif text-[26px] sm:text-[34px] lg:text-[42px] leading-[1.2] tracking-tight font-normal text-[#322b27] uppercase">
                  {lang === 'vi' ? (
                    <>
                      Chạm cảm xúc & <br />
                      <span className="italic text-brand-gold font-light font-normal text-[#aa9581]">thay đổi tư duy.</span>
                    </>
                  ) : (
                    <>
                      Touching emotions & <br />
                      <span className="italic text-[#aa9581] font-light">changing mindsets.</span>
                    </>
                  )}
                </h1>

                {/* Thin horizontal design divider line from the reference mockup */}
                <div className="w-24 h-[1px] bg-[#322b27]/35 my-8"></div>

                {/* Subtext description paragraph */}
                <p className="text-slate-600 text-[14px] sm:text-base leading-relaxed max-w-xl mb-8 font-sans">
                  {lang === 'vi' ? (
                    'Xin chào, tôi là Nguyễn Mai Bích Ngân — một Trainer, MC và Instructional Designer tận tụy. Tôi tin rằng đào tạo hiệu quả đến từ việc thấu cảm sâu sắc người học, khơi dậy nguồn cảm hứng tự thân và ứng dụng tư duy thiết kế tinh gọn để đem đến những chuyển đổi hành vi đột phá trong công việc.'
                  ) : (
                    'Hello, I am Nguyen Mai Bich Ngan — a dedicated Trainer, MC, and Instructional Designer. I believe true training excellence blooms from deep learner empathy, vibrant inspiration, and lean instructional design to activate real behavioral shifts and lasting workspace success.'
                  )}
                </p>

                {/* Dark, clean rectangular Learn More / Download CV CTA Button */}
                <div className="flex flex-wrap gap-4 mb-10">
                  <a 
                    href="https://drive.google.com/file/d/1-GC-UIcWim3_XpdJO2mM9egWs6V94Q2X/view?usp=sharing"
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="bg-[#1e1a17] hover:bg-brand-red text-[#faf7f2] hover:text-white px-8 py-4 text-[10px] font-bold tracking-widest uppercase transition-all duration-300 shadow-sm"
                  >
                    {lang === 'vi' ? 'TẢI CV TRAINER ↗' : 'DOWNLOAD CV ↗'}
                  </a>
                  
                  <button 
                    onClick={() => scrollTo('about')}
                    className="border border-[#322b27]/30 hover:border-[#322b27] text-[#322b27] px-8 py-4 text-[10px] font-bold tracking-widest uppercase transition-all duration-300"
                  >
                    {lang === 'vi' ? 'TÌM HIỂU THÊM ↓' : 'LEARN MORE ↓'}
                  </button>
                </div>

                {/* Minimal, beautiful row of core accomplishments / stats */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-[#322b27]/10 pt-8">
                  <div className="bg-[#fcfbf9] border border-brand-gold/15 p-5 shadow-xs">
                    <div className="text-2xl font-serif text-[#322b27]">6000+</div>
                    <div className="text-[9px] uppercase font-bold tracking-[0.15em] text-[#aa9581] mt-1">
                      {lang === 'vi' ? 'Học viên' : 'Learners Trained'}
                    </div>
                  </div>
                  <div className="bg-[#fcfbf9] border border-brand-gold/15 p-5 shadow-xs">
                    <div className="text-2xl font-serif text-[#322b27]">1000+</div>
                    <div className="text-[9px] uppercase font-bold tracking-[0.14em] text-[#aa9581] mt-1 leading-tight">
                      {lang === 'vi' ? 'Giờ đào tạo' : 'Hours Trained'}
                    </div>
                  </div>
                  <div className="bg-[#fcfbf9] border border-brand-gold/15 p-5 shadow-xs">
                    <div className="text-2xl font-serif text-[#322b27]">6+ Năm</div>
                    <div className="text-[9px] uppercase font-bold tracking-[0.15em] text-[#aa9581] mt-1 leading-tight">
                      {lang === 'vi' ? 'Kinh Nghiệm L&D' : 'L&D Exp.'}
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* Right Column - Elegant portrait of Bich Ngan working on laptop exactly mimicking mock structure */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="lg:col-span-5 relative max-w-md mx-auto lg:max-w-none w-full"
              >
                {/* Ambient drop shadow backdrop glow */}
                <div className="absolute inset-0 bg-[#ebdcca]/30 rounded-[1.5rem] blur-2xl opacity-60 pointer-events-none -z-10"></div>
                
                {/* Sleek architectural rectangular frame for the image */}
                <div className="bg-white border border-brand-gold/15 shadow-[0_30px_60px_rgba(40,30,20,0.08)] overflow-hidden transition-all duration-500 hover:shadow-[0_40px_70px_rgba(40,30,20,0.12)]">
                  <img 
                    src="https://i.ibb.co/N2ZDD1p6/z7239963470212-8e1aaec6327f7604746b310c858e80d9.webp" 
                    alt="Nguyen Mai Bich Ngan"
                    className="w-full h-[460px] lg:h-[550px] object-cover object-center transition-all duration-700 hover:scale-[1.03] grayscale-[5%] contrast-[103%]"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </motion.div>

            </div>
          </section>

          {/* About Section */}
          <section id="about" className="py-24 lg:py-32">
            <div className="max-w-7xl mx-auto px-6">
              <div className="text-center mb-20">
                <h2 className="text-4xl lg:text-5xl font-bold text-brand-blue mb-6">{et.aboutMeTitle}</h2>
                <div className="w-16 h-0.5 bg-brand-red mx-auto"></div>
                <p className="mt-6 text-slate-500 max-w-2xl mx-auto">
                  {t.hero.role}
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
                {/* Left Col */}
                <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-sm relative overflow-hidden min-h-full">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-brand-red/5 rounded-full blur-2xl pointer-events-none"></div>
                  {et.aboutTitle && (
                    <>
                      <h3 className="text-2xl font-bold text-brand-blue mb-4 leading-tight">
                        {et.aboutTitle}
                      </h3>
                      <div className="w-10 h-0.5 bg-brand-red mb-6"></div>
                    </>
                  )}
                  
                  <div className="text-slate-600 space-y-4 mb-8 leading-relaxed text-[15px] font-vietnam">
                    {lang === 'vi' ? (
                      <>
                        <p>
                          Tôi hoạt động hơn 6 năm trong lĩnh vực Learning & Development với định hướng phát triển toàn diện giữa đào tạo, thiết kế trải nghiệm học tập và truyền thông nội bộ cho HDBank, VikkiBank.
                        </p>
                        <p>
                          Kinh nghiệm của tôi trải dài qua nhiều vai trò: Trainer, Instructional Designer, Training Coordinator, MC/Host và tham gia điều phối sản xuất các chương trình đào tạo – truyền thông.
                        </p>
                        <p>
                          Tôi đặc biệt quan tâm đến việc kết hợp giữa tư duy đào tạo hiện đại, năng lượng tích cực và ứng dụng công nghệ/AI để tạo ra những trải nghiệm học tập có tính kết nối, truyền cảm hứng và tạo chuyển đổi hành vi thực tế.
                        </p>
                      </>
                    ) : (
                      <>
                        <p>
                          I have been active for more than 6 years in the field of Learning & Development, with a comprehensive focus on training, learning experience design, and internal communication for HDBank and VikkiBank.
                        </p>
                        <p>
                          My experience spans multiple roles: Trainer, Instructional Designer, Training Coordinator, MC/Host, and coordinating the production of training and communication programs.
                        </p>
                        <p>
                          I am particularly interested in combining modern training mindsets, positive energy, and technology/AI applications to create connecting, inspiring learning experiences that drive real behavioral change.
                        </p>
                      </>
                    )}
                  </div>
                </div>

                {/* Right Col */}
                <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-sm min-h-full">
                  <h3 className="text-2xl font-bold text-brand-blue mb-4 leading-tight">
                     {lang === 'vi' ? 'Chuyên môn' : 'Expertise'}
                  </h3>
                  <div className="w-10 h-0.5 bg-brand-red mb-6"></div>
                  
                  {/* Skill Bars */}
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between text-xs text-brand-blue mb-2 font-medium"><span>{et.skills.s1}</span></div>
                      <div className="w-full bg-slate-200 rounded-full h-1.5 overflow-hidden">
                        <motion.div className="bg-brand-red h-1.5 rounded-full" initial={{ width: 0 }} whileInView={{ width: '95%' }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.1, ease: "easeOut" }} />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs text-brand-blue mb-2 font-medium"><span>{et.skills.s2}</span></div>
                      <div className="w-full bg-slate-200 rounded-full h-1.5 overflow-hidden">
                        <motion.div className="bg-brand-red h-1.5 rounded-full" initial={{ width: 0 }} whileInView={{ width: '90%' }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.2, ease: "easeOut" }} />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs text-brand-blue mb-2 font-medium"><span>{et.skills.s3}</span></div>
                      <div className="w-full bg-slate-200 rounded-full h-1.5 overflow-hidden">
                        <motion.div className="bg-brand-red h-1.5 rounded-full" initial={{ width: 0 }} whileInView={{ width: '95%' }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.3, ease: "easeOut" }} />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs text-brand-blue mb-2 font-medium"><span>{et.skills.s4}</span></div>
                      <div className="w-full bg-slate-200 rounded-full h-1.5 overflow-hidden">
                        <motion.div className="bg-brand-red h-1.5 rounded-full" initial={{ width: 0 }} whileInView={{ width: '50%' }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.4, ease: "easeOut" }} />
                      </div>
                    </div>
                  </div>


                </div>
              </div>
            </div>
          </section>

      {/* Services Section */}
      <section className="py-24 lg:py-32 bg-[url('https://images.unsplash.com/photo-1542744094-24638ea0b56c?q=80&w=2000')] bg-fixed bg-cover bg-center relative">
        <div className="absolute inset-0 bg-white/95"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-brand-blue mb-6">{et.servicesHeader}</h2>
          <div className="w-16 h-0.5 bg-brand-red mx-auto mb-6"></div>
          <p className="text-slate-500 mb-20">{lang === 'vi' ? 'Ứng dụng kiến thức chuyên môn vào đa dạng lĩnh vực' : 'Applying expertise in various fields.'}</p>
          
          <div className="grid md:grid-cols-3 gap-8 text-center pt-8">
             <div className="bg-white p-12 hover:-translate-y-2 transition-transform duration-300 shadow-xl shadow-slate-200/50 flex flex-col items-center group">
                <Briefcase size={50} className="text-brand-red mb-6 group-hover:scale-110 transition-transform"/>
                <h3 className="text-xl font-bold mb-4 text-brand-blue">{lang === 'vi' ? 'Đào tạo kỹ năng' : 'Skills Training'}</h3>
                <p className="text-slate-500 leading-relaxed text-sm">
                  {lang === 'vi' ? 'Giảng dạy các khóa đào tạo: Kỹ năng thuyết trình, Sức mạnh giọng nói, Kỹ năng giao tiếp, Hội nhập, Kỹ năng làm việc nhóm, Kỹ năng ứng dụng AI vào đào tạo, Train the Trainer (trợ giảng), Tác phong nhân viên ngân hàng, Hướng dẫn sử dụng Notion,....' : 'Instructing training courses: Presentation Skills, Voice Power, Communication Skills, Integration, Teamwork, AI Applications in Training, Train the Trainer (co-instructor), Bank Staff Professionalism, Notion Guide,....'}
                </p>
             </div>
             
             <div className="bg-white p-12 hover:-translate-y-2 transition-transform duration-300 shadow-xl shadow-slate-200/50 flex flex-col items-center group">
                <BookOpen size={50} className="text-brand-red mb-6 group-hover:scale-110 transition-transform"/>
                <h3 className="text-xl font-bold mb-4 text-brand-blue">{lang === 'vi' ? 'Thiết kế chương trình' : 'Program Design'}</h3>
                <p className="text-slate-500 leading-relaxed text-sm">
                  {lang === 'vi' ? 'Ứng dụng RID và LAD vào xây dựng kế hoạch đào tạo tinh gọn, đảm bảo tính thực tiễn cao.' : 'Applying RID and LAD methods to build lean training plans, ensuring high practicality.'}
                </p>
             </div>
             
             <div className="bg-white p-12 hover:-translate-y-2 transition-transform duration-300 shadow-xl shadow-slate-200/50 flex flex-col items-center group">
                <Mic size={50} className="text-brand-red mb-6 group-hover:scale-110 transition-transform"/>
                <h3 className="text-xl font-bold mb-4 text-brand-blue">{lang === 'vi' ? 'Host & Người dẫn chương trình' : 'Host & Master of Ceremonies'}</h3>
                <p className="text-slate-500 leading-relaxed text-sm">
                  {lang === 'vi' 
                    ? 'Chứng nhận Người dẫn chương trình, Public Speaking, Train Your Voice và 4 năm dẫn chương trình, host các sự kiện hội thảo, game, đào tạo, talkshow, livestream ,...' 
                    : 'Certified MC, Public Speaking, Train Your Voice with 4 years of experience hosting seminars, game shows, training events, talk shows, and livestreams...'}
                </p>
             </div>
          </div>
        </div>
      </section>

      {/* Work Experience - Custom Designed to editorial Sand Beige timeline */}
      <section id="experience" className="py-24 lg:py-32 bg-brand-gray border-t border-brand-gold/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-[10px] uppercase tracking-[0.3em] text-brand-gold font-bold">{lang === 'vi' ? 'HÀNH TRÌNH NGHỀ NGHIỆP' : 'PROFESSIONAL TRANSIT'}</span>
            <h2 className="text-4xl lg:text-5xl font-serif text-brand-blue mt-3 mb-6 tracking-tight leading-none font-normal">{t.experience.title}</h2>
            <div className="w-12 h-0.5 bg-brand-gold/45 mx-auto mb-6"></div>
            <p className="text-slate-500 max-w-xl mx-auto text-sm">{t.hero.role}</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative border-l-2 border-brand-gold/25 pl-8 ml-4 md:ml-0 space-y-12">
              {t.experience.items.map((item, index) => (
                <div key={index} className="relative">
                   {/* Gold ring timelines point container */}
                   <div className="absolute -left-[41px] top-1.5 w-[18px] h-[18px] rounded-full border-4 border-[#f7f4f0] bg-brand-gold shadow-sm"></div>
                   
                   <div className="bg-[#faf7f2] p-8 md:p-10 shadow-[0_15px_35px_rgba(170,149,129,0.05)] rounded-[2rem] hover:-translate-y-1 transition-all duration-300 border border-brand-gold/15">
                     <span className="inline-block bg-brand-red/10 text-brand-red font-semibold px-4 py-1.5 rounded-full text-xs font-mono tracking-wider uppercase mb-5">{item.period}</span>
                     
                     <h3 className="text-xl sm:text-2xl font-serif text-brand-blue mb-1 font-normal leading-tight">{item.role}</h3>
                     
                     <p className="text-brand-gold font-medium text-sm mb-6 flex items-center gap-1.5">
                       <span className="text-slate-400 font-light text-xs uppercase tracking-wide">{lang === 'vi' ? 'tại' : 'at'}</span> 
                       <span className="underline decoration-brand-gold/40 underline-offset-4">{(item as any).company}</span>
                     </p>
                     
                     <ul className="text-slate-600 text-[14px] leading-relaxed space-y-3.5">
                        {item.description.map((d, i) => (
                           <li key={i} className="flex gap-3 items-start">
                             <CheckCircle2 size={16} className="text-brand-red shrink-0 mt-1" /> 
                             <span>{d}</span>
                           </li>
                        ))}
                     </ul>
                   </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Grid - Re-styled to match premium, heavy-shadowed architectural design */}
      <section id="portfolio" className="py-24 lg:py-32 bg-[#faf8f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="bg-brand-blue border border-brand-gold/20 rounded-[2.5rem] p-8 md:p-16 shadow-2xl relative overflow-hidden text-[#faf7f2]">
            {/* Ambient luxury radial gradient blur background */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-gold/10 rounded-full blur-3xl pointer-events-none -z-10"></div>
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-brand-red/5 rounded-full blur-3xl pointer-events-none -z-10"></div>
            
            <div className="text-center mb-16 relative">
              <span className="text-[10px] uppercase tracking-[0.3em] text-brand-gold font-bold">{lang === 'vi' ? 'HÌNH ẢNH HOẠT ĐỘNG' : 'VISUAL WORK REEL'}</span>
              <h2 className="text-4xl lg:text-6xl font-serif text-white mt-3 mb-6 tracking-tight leading-none font-normal">
                Visual <span className="italic text-brand-gold font-light">Portfolio.</span>
              </h2>
              <div className="w-12 h-0.5 bg-brand-gold/45 mx-auto mb-6"></div>
              <p className="text-[#faf7f2]/75 max-w-2xl mx-auto text-sm font-sans">{et.portfolioSubHeader}</p>
            </div>
            
            {/* Area 1: Teaching */}
            <div className="mb-24 relative">
              <div className="flex items-center gap-3 mb-8 border-b border-brand-gold/15 pb-4">
                <div className="w-9 h-9 bg-brand-gold/15 rounded-full flex items-center justify-center text-brand-gold">
                  <BookOpen size={18} />
                </div>
                <h3 className="text-xl lg:text-2xl font-serif text-white font-normal">{et.portfolioTeachingTitle}</h3>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {teachingImages.map((src, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.08 }}
                    className="overflow-hidden rounded-[2rem] group relative aspect-video cursor-pointer border border-brand-gold/15 shadow-sm"
                    onClick={() => setSelectedImg(src)}
                  >
                    <img 
                      src={src} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale-[15%] group-hover:grayscale-0" 
                      referrerPolicy="no-referrer" 
                    />
                    <div className="absolute inset-0 bg-brand-blue/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <div className="bg-[#faf7f2]/90 p-2.5 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform shadow-md">
                          <ChevronRight className="text-brand-blue" size={20} />
                        </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Area 2: Projects & Media */}
            <div className="relative">
              <div className="flex items-center gap-3 mb-8 border-b border-brand-gold/15 pb-4">
                <div className="w-9 h-9 bg-brand-gold/15 rounded-full flex items-center justify-center text-brand-gold">
                  <Globe2 size={18} />
                </div>
                <h3 className="text-xl lg:text-2xl font-serif text-white font-normal">{et.portfolioProjectsTitle}</h3>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {projectImages.map((src, idx) => {
                  const isTargetImg = idx === 2 || src.includes("z7761940054387");
                  return (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.08 }}
                      className="overflow-hidden rounded-[2rem] group relative aspect-video cursor-pointer border border-brand-gold/15 shadow-sm"
                      onClick={() => setSelectedImg(src)}
                    >
                      <img 
                        src={src} 
                        className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale-[15%] group-hover:grayscale-0 ${
                          isTargetImg ? "object-[center_15%]" : ""
                        }`} 
                        referrerPolicy="no-referrer" 
                      />
                      <div className="absolute inset-0 bg-brand-blue/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <div className="bg-[#faf7f2]/90 p-2.5 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform shadow-md">
                            <ChevronRight className="text-brand-blue" size={20} />
                          </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

        {/* Achievements / Awards - Custom Designed to editorial Warm Sand aesthetic */}
       <section className="py-24 lg:py-32 bg-[#faf8f5] relative overflow-hidden border-t border-brand-gold/10">
         {/* Decorative elements */}
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-brand-red/5 rounded-full blur-3xl -z-10"></div>
         
         <div className="max-w-7xl mx-auto px-6 text-center">
             <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="mb-16"
             >
               <span className="text-[10px] uppercase tracking-[0.3em] text-brand-gold font-bold">{lang === 'vi' ? 'CHẶNG ĐƯỜNG NỖ LỰC' : 'HONORS & MILESTONES'}</span>
               <h2 className="text-4xl lg:text-5xl font-serif text-brand-blue mt-3 mb-6 tracking-tight leading-none font-normal">
                 {t.achievements.title}
               </h2>
               <div className="w-12 h-0.5 bg-brand-gold/45 mx-auto rounded-full"></div>
             </motion.div>
 
             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
               {t.achievements.items.map((item, index) => {
                 let Icon = Award;
                 const itemLower = item.toLowerCase();
                 if (itemLower.includes('top 3') || itemLower.includes('tiêu biểu') || itemLower.includes('trainer')) {
                   Icon = Trophy;
                 } else if (itemLower.includes('xuất sắc') || itemLower.includes('employee')) {
                   Icon = Medal;
                 } else if (itemLower.includes('chất lượng') || itemLower.includes('quality')) {
                   Icon = Star;
                 } else if (itemLower.includes('chương trình phát triển') || itemLower.includes('program')) {
                   Icon = GraduationCap;
                 }
 
                 return (
                   <motion.div 
                     key={index}
                     initial={{ opacity: 0, y: 30 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: index * 0.08, duration: 0.5 }}
                     whileHover={{ y: -8 }}
                     className="bg-[#faf7f2] p-8 rounded-[2rem] shadow-[0_15px_35px_rgba(170,149,129,0.06)] border border-brand-gold/15 hover:border-brand-red/30 group relative overflow-hidden flex flex-col items-center text-center transition-all duration-300"
                   >
                     {/* Animated Background Glow */}
                     <div className="absolute -inset-1 bg-gradient-to-br from-brand-red/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-xl"></div>
                     
                     <div className="relative z-10 w-full">
                       <div className="mb-6 mx-auto text-brand-red bg-brand-red/10 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:bg-brand-red group-hover:text-[#faf7f2] transition-all duration-500 ring-8 ring-transparent group-hover:ring-brand-red/10">
                         <Icon size={26} />
                       </div>
                       
                       <h4 className="text-brand-blue font-serif text-lg leading-snug font-normal mb-4 transition-colors group-hover:text-brand-red min-h-[3rem] flex items-center justify-center">
                         {item}
                       </h4>
                       
                       <div className="w-8 h-0.5 bg-brand-gold/30 mx-auto rounded-full group-hover:w-16 group-hover:bg-brand-red transition-all duration-500"></div>
                     </div>
 
                     {/* Background Trophy Icon Placeholder for texture */}
                     <div className="absolute -right-6 -bottom-6 text-brand-gold/5 group-hover:text-brand-gold/10 transition-colors duration-500">
                       <Icon size={120} />
                     </div>
                   </motion.div>
                 );
               })}
             </div>
         </div>
       </section>

        </>
      ) : (
        /* Render newly designed interactive educational sub-page list & file manager */
        <div className="pt-32 pb-24 bg-white min-h-[85vh]">
          <div className="max-w-7xl mx-auto px-6">
            
            {/* Page Header / Breadcrumb */}
            <div className="mb-14 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-6 border-b border-slate-100 pb-10">
              <div>
                <div className="flex items-center justify-center md:justify-start gap-2 text-sm text-slate-400 font-medium mb-2">
                  <button onClick={() => setCurrentView('home')} className="hover:text-brand-red transition-all">{lang === 'vi' ? 'Trang chủ' : 'Home'}</button>
                  <span>/</span>
                  <span className="text-brand-red font-semibold">{t.nav.education}</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-brand-blue tracking-tight">{et.eduSubPageTitle}</h1>
                <p className="text-slate-500 mt-2 text-[15px] max-w-2xl">{et.eduSubPageSubtitle}</p>
              </div>
              <div>
                <button 
                  onClick={() => setCurrentView('home')}
                  className="flex items-center gap-2 border-2 border-brand-blue hover:border-brand-red text-brand-blue hover:text-brand-red font-semibold px-6 py-3 rounded-xl transition-all shadow-md hover:shadow-lg cursor-pointer"
                >
                  <ArrowRight className="rotate-180" size={18} />
                  <span>{et.backToHome}</span>
                </button>
              </div>
            </div>

            {/* Section 1: Academic Timeline & Textual Bullet Certs */}
            <div className="grid lg:grid-cols-12 gap-12 items-start mb-24">
              
              {/* Timeline Column */}
              <div className="lg:col-span-5 space-y-8 bg-slate-50 p-8 rounded-3xl border border-slate-100/60 shadow-sm">
                <h3 className="text-2xl font-bold text-brand-blue flex items-center gap-3 border-b border-slate-200 pb-4 mb-6">
                  <GraduationCap className="text-brand-red" size={28} />
                  <span>{lang === 'vi' ? 'Lộ trình Học vấn' : 'Academic Background'}</span>
                </h3>
                
                <div className="relative border-l-2 border-brand-red/20 pl-6 ml-2 space-y-10">
                  {t.education.items.map((item, idx) => (
                    <div key={idx} className="relative group">
                      <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full border-2 border-white bg-brand-red shadow-sm group-hover:scale-125 transition-transform"></div>
                      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm group-hover:border-brand-red/20 transition-all">
                        <span className="text-[11px] font-bold text-brand-red uppercase tracking-wider bg-brand-red/5 px-2.5 py-1 rounded">
                          {idx === 0 ? (lang === 'vi' ? 'Tốt nghiệp' : 'Graduated') : (lang === 'vi' ? 'Văn bằng 2' : 'Degree 2')}
                        </span>
                        <h4 className="font-bold text-brand-blue text-lg mt-3 mb-1">{item.school}</h4>
                        <p className="text-slate-600 font-medium text-sm leading-relaxed">{item.degree}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Standard bullets / Competency summary list */}
              <div className="lg:col-span-7 space-y-8 bg-slate-50 p-8 rounded-3xl border border-slate-100/60 shadow-sm">
                <h3 className="text-2xl font-bold text-brand-blue flex items-center gap-3 border-b border-slate-200 pb-4 mb-6">
                  <Award className="text-brand-red" size={28} />
                  <span>{t.education.certTitle}</span>
                </h3>
                
                <div className="grid gap-4">
                  {t.education.certs.map((cert, idx) => (
                    <div key={idx} className="flex gap-4 items-start bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:border-brand-red/10 hover:shadow-md transition-all">
                      <CheckCircle2 size={22} className="text-brand-red shrink-0 mt-0.5" />
                      <div>
                        <p className="text-slate-700 text-sm md:text-[15px] leading-relaxed font-semibold">{cert.split(":")[0]}</p>
                        <p className="text-slate-500 text-xs md:text-sm leading-relaxed mt-1">{cert.split(":")[1] || ""}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>



            {/* Section 3: Filterable Digital Certificate Grid */}
            <div>
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-brand-blue tracking-tight">{et.certGalleryTitle}</h3>
                <p className="text-slate-500 text-sm mt-2 max-w-xl mx-auto leading-relaxed">{et.certGallerySubtitle}</p>
              </div>

              {/* Filter Row */}
              <div className="flex flex-wrap justify-center gap-2.5 mb-10">
                {[
                  { key: 'all', label: et.filterAll },
                  { key: 'academic', label: et.filterAcademic },
                  { key: 'skills', label: et.filterSkills },
                  { key: 'ai', label: et.filterAiTech },
                  { key: 'supporting', label: et.filterSupporting }
                ].map((btn) => (
                  <button
                    key={btn.key}
                    onClick={() => setCertFilter(btn.key)}
                    className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all tracking-wide cursor-pointer ${
                      certFilter === btn.key 
                        ? 'bg-brand-red text-white shadow-md shadow-brand-red/20 scale-105' 
                        : 'bg-slate-100 text-[#071d3d] hover:bg-slate-200'
                    }`}
                  >
                    {btn.label}
                  </button>
                ))}
              </div>

              {/* Grid of competency tags instead of full image cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[...customCerts, ...defaultCerts]
                  .filter(c => certFilter === 'all' || c.category === certFilter)
                  .map((cert) => {
                    
                    // Generate category specific colors & icons
                    let itemTheme = {
                      bgBg: 'from-[#edf3f8]/80 to-[#edf3f8]/40',
                      border: 'border-blue-100',
                      textColor: 'text-[#1e3a5f]',
                      tagColor: 'bg-blue-100 text-[#1e3a5f]',
                      tagLabel: et.certSkillsBadge,
                      icon: Award
                    };
                    
                    if (cert.category === 'academic') {
                      itemTheme = {
                        bgBg: 'from-[#ffebe6]/45 to-transparent',
                        border: 'border-[#ffdacf]',
                        textColor: 'text-brand-red',
                        tagColor: 'bg-[#ffebe6] text-brand-red',
                        tagLabel: et.certAcademicBadge,
                        icon: GraduationCap
                      };
                    } else if (cert.category === 'ai') {
                      itemTheme = {
                        bgBg: 'from-[#e6f4ea]/45 to-transparent',
                        border: 'border-emerald-100',
                        textColor: 'text-emerald-800',
                        tagColor: 'bg-emerald-100 text-emerald-800',
                        tagLabel: et.certAiBadge,
                        icon: Cpu
                      };
                    } else if (cert.category === 'supporting') {
                      itemTheme = {
                        bgBg: 'from-[#f3e8ff]/45 to-transparent',
                        border: 'border-purple-100',
                        textColor: 'text-purple-800',
                        tagColor: 'bg-purple-100 text-purple-800',
                        tagLabel: et.certSupportingBadge,
                        icon: Sparkles
                      };
                    }

                    const IconComponent = itemTheme.icon;

                    return (
                      <motion.div
                        key={cert.id}
                        layout
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.25 }}
                        className={`bg-gradient-to-br ${itemTheme.bgBg} border ${itemTheme.border} rounded-xl p-4 flex items-start gap-4 transition-all duration-300 relative shadow-[0_2px_8px_-3px_rgba(0,0,0,0.02)]`}
                      >
                        {/* Elegant Left Accent Icon Bubble */}
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${itemTheme.tagColor} border border-transparent transition-all duration-300`}>
                          <IconComponent size={20} />
                        </div>

                        {/* Certificate name and details in compact tag form */}
                        <div className="flex-1 min-w-0 pr-2">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-[9px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-md bg-white/80 shadow-sm text-slate-500">
                              {itemTheme.tagLabel}
                            </span>
                            <span className="font-mono text-[9px] font-semibold text-slate-400">
                              {cert.year}
                            </span>
                          </div>
                          
                          <h4 className="font-bold text-slate-800 text-[14px] leading-snug tracking-tight line-clamp-2">
                            {lang === 'vi' ? cert.titleVi : cert.titleEn}
                          </h4>
                          
                          <p className="text-slate-500 text-[11px] leading-relaxed mt-1 line-clamp-1">
                            {lang === 'vi' ? cert.issuerVi : cert.issuerEn}
                          </p>
                        </div>
                      </motion.div>
                    );
                  })}
              </div>
            </div>

          </div>
        </div>
      )}

      {/* Custom Minimalist Contact & Footer Section - Espresso & Terracotta */}
      <section id="contact" className="bg-brand-blue text-[#faf7f2] pt-20 pb-10 relative overflow-hidden border-t border-brand-gold/15">
        {/* Decorative subtle visual elements */}
        <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-brand-gold/5 rounded-full blur-3xl pointer-events-none -z-10"></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-brand-red/5 rounded-full blur-3xl pointer-events-none -z-10"></div>
        
        <div className="max-w-5xl mx-auto px-6">
          <div className="pb-12 border-b border-brand-gold/10 flex flex-col items-center text-center">
            
            <span className="text-[10px] uppercase tracking-[0.3em] text-brand-gold font-bold mb-3">
              {lang === 'vi' ? 'HỢP TÁC & KẾT NỐI' : 'LET\'S WORK TOGETHER'}
            </span>
            <h4 className="text-3xl sm:text-4xl font-serif text-white tracking-tight leading-none mb-10 font-normal">
              {lang === 'vi' ? (
                <span>Trò chuyện cùng <span className="italic text-brand-gold font-light">Bích Ngân.</span></span>
              ) : (
                <span>Connect with <span className="italic text-brand-gold font-light">Bích Ngân.</span></span>
              )}
            </h4>
            
            <div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-6 md:gap-14 w-full">
              {/* Phone/Zalo Item */}
              <div className="flex items-center group">
                <div className="w-10 h-10 rounded-full bg-brand-gold/10 flex items-center justify-center border border-brand-gold/20 text-brand-gold group-hover:bg-brand-red group-hover:text-white group-hover:border-transparent transition-all duration-300 mr-3.5 shrink-0">
                  <Phone size={15} />
                </div>
                <div className="text-left">
                  <span className="block text-[8px] text-[#faf7f2]/50 tracking-wider uppercase font-bold">
                    {lang === 'vi' ? 'ĐIỆN THOẠI / ZALO' : 'TELEPHONE / ZALO'}
                  </span>
                  <a href="tel:0901407493" className="block text-base font-medium text-[#faf7f2] hover:text-brand-gold transition-colors mt-0.5 font-mono">
                    0901407493
                  </a>
                </div>
              </div>
 
              {/* Email Item */}
              <div className="flex items-center group">
                <div className="w-10 h-10 rounded-full bg-brand-gold/10 flex items-center justify-center border border-brand-gold/20 text-brand-gold group-hover:bg-brand-red group-hover:text-white group-hover:border-transparent transition-all duration-300 mr-3.5 shrink-0">
                  <Mail size={15} />
                </div>
                <div className="text-left">
                  <span className="block text-[8px] text-[#faf7f2]/50 tracking-wider uppercase font-bold">
                    EMAIL ADDRESS
                  </span>
                  <a href="mailto:bichngannguyenmai@gmail.com" className="block text-sm font-medium text-[#faf7f2] hover:text-brand-gold transition-colors mt-0.5 break-all">
                    bichngannguyenmai@gmail.com
                  </a>
                </div>
              </div>
 
              {/* Social Channels Item */}
              <div className="flex items-center gap-2 pt-2 md:pt-0">
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-9 h-9 border border-brand-gold/15 hover:border-brand-red text-[#faf7f2] bg-brand-gold/5 hover:bg-brand-red flex items-center justify-center rounded-full transition-all duration-300"
                  title="Facebook"
                >
                  <Facebook size={14} />
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-9 h-9 border border-brand-gold/15 hover:border-brand-red text-[#faf7f2] bg-brand-gold/5 hover:bg-brand-red flex items-center justify-center rounded-full transition-all duration-300"
                  title="LinkedIn"
                >
                  <Linkedin size={14} />
                </a>
              </div>
            </div>
          </div>
          
          {/* Inner copyright line */}
          <div className="pt-8 text-center text-brand-gold/40 text-[11px] uppercase tracking-widest">
            {lang === 'vi' 
              ? 'Copyright © 2026 Nguyễn Mai Bích Ngân. Đã bảo lưu mọi quyền.' 
              : 'Copyright © 2026 Nguyen Mai Bich Ngan. All rights reserved.'}
          </div>
        </div>
      </section>

      {/* Lightbox / Image Viewer Modal */}
      {selectedImg && (
        <div 
          className="fixed inset-0 bg-black/90 z-[100] flex items-center justify-center p-4 md:p-8"
          onClick={() => setSelectedImg(null)}
        >
          <button 
            className="absolute top-6 right-6 text-white hover:text-brand-red bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors z-[110] cursor-pointer"
            onClick={(e) => { e.stopPropagation(); setSelectedImg(null); }}
          >
            <X size={28} />
          </button>
          
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative max-w-5xl max-h-[90vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={selectedImg} 
              alt="Portfolio visual item"
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      )}

      {/* Official Verified Virtual Certificate Frame Box */}
      {selectedVirtualCert && (
        <div 
          className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center p-4 md:p-8 overflow-y-auto"
          onClick={() => setSelectedVirtualCert(null)}
        >
          <button 
            className="absolute top-6 right-6 text-white hover:text-brand-red bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors z-[110] cursor-pointer"
            onClick={(e) => { e.stopPropagation(); setSelectedVirtualCert(null); }}
          >
            <X size={28} />
          </button>
          
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative w-full max-w-4xl bg-[#fdfbf7] text-[#071d3d] p-8 md:p-16 rounded-2xl shadow-2xl border-8 border-double border-[#071d3d] flex flex-col items-center select-none my-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Gold Inner Inset Frame Accent */}
            <div className="absolute inset-2 border border-[#c5a368] pointer-events-none rounded-lg"></div>
            
            {/* Elegant Classical Corner Ornaments */}
            <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-[#c5a368]"></div>
            <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-[#c5a368]"></div>
            <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-[#c5a368]"></div>
            <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-[#c5a368]"></div>

            {/* Emblem Header Block */}
            <div className="flex flex-col items-center mt-4 mb-2">
              <Award size={64} className="text-[#c5a368] mb-4 stroke-[1.5]" />
              <h2 className="font-serif italic text-sm md:text-base tracking-[0.2em] text-[#c5a368] uppercase font-bold text-center">
                {lang === 'vi' ? 'HỒ SƠ KHẢO THÍ CHỨNG CHỈ SỐ' : 'DIGITAL VERIFIED CREDENTIAL'}
              </h2>
              <div className="h-px w-36 bg-[#c5a368]/50 my-3"></div>
            </div>

            {/* Main Core Body */}
            <div className="w-full text-center max-w-2xl px-4">
              <p className="font-serif italic text-sm mb-4 text-[#071d3d]/70">
                {lang === 'vi' ? 'Học viện công nhận năng lực trân trọng trao tặng cho / This is to certify that' : 'This is proudly presented and verified to'}
              </p>
              
              <h1 className="text-3xl md:text-5xl font-bold tracking-widest text-[#071d3d] font-sans my-4 uppercase border-b border-[#071d3d]/10 pb-4">
                NGUYỄN MAI BÍCH NGÂN
              </h1>

              <p className="font-serif italic text-sm mb-2 text-[#071d3d]/70">
                {lang === 'vi' ? 'Đối với việc hoàn tất và sở hữu chứng chỉ / For completing the credentials of' : 'For achieving the verified soft-skills milestone of'}
              </p>

              <h3 className="text-xl md:text-2xl font-bold text-[#b51c14] tracking-tight leading-snug font-serif my-4 px-4 bg-[#b51c14]/5 py-3 rounded-lg border border-[#b51c14]/10">
                {lang === 'vi' ? selectedVirtualCert.titleVi : selectedVirtualCert.titleEn}
              </h3>

              <p className="text-xs md:text-sm text-[#071d3d]/80 font-medium tracking-wide max-w-xl mx-auto mb-2 leading-relaxed">
                {lang === 'vi' ? selectedVirtualCert.majorVi : selectedVirtualCert.majorEn}
              </p>

              <p className="text-xs md:text-sm text-[#c5a368] font-semibold tracking-wider italic uppercase mb-8">
                {lang === 'vi' ? selectedVirtualCert.gradeVi : selectedVirtualCert.gradeEn}
              </p>
            </div>

            {/* Bottom Cert Meta Info Grid */}
            <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 text-center border-t border-[#071d3d]/10 pt-8 mt-2 px-4">
              {/* Verification seal */}
              <div className="flex flex-col items-center justify-center">
                <span className="text-[10px] uppercase tracking-wider text-[#071d3d]/60 font-medium mb-1">
                  {et.verifySeal}
                </span>
                <div className="w-16 h-16 rounded-full border-2 border-dashed border-[#c5a368] text-[#c5a368] flex items-center justify-center font-bold font-serif text-[10px] leading-tight flex-col select-none ring-4 ring-[#c5a368]/5">
                  <Check size={18} className="stroke-[3]" />
                  <span className="scale-90 text-[8px] uppercase">VERIFIED</span>
                </div>
              </div>

              {/* Issued details */}
              <div className="flex flex-col items-center justify-center">
                <span className="text-[10px] uppercase tracking-wider text-[#071d3d]/60 font-medium mb-1">
                  {lang === 'vi' ? 'CƠ QUAN BAN HÀNH' : 'ISSUED BY'}
                </span>
                <p className="font-bold text-xs text-[#071d3d] uppercase tracking-wide">
                  {lang === 'vi' ? selectedVirtualCert.issuerVi : selectedVirtualCert.issuerEn}
                </p>
                <p className="font-mono text-[10px] text-[#071d3d]/60 mt-1">
                  {lang === 'vi' ? 'Năm cấp: ' : 'Issued: '} {selectedVirtualCert.year}
                </p>
              </div>

              {/* Credential ID code */}
              <div className="flex flex-col items-center justify-center">
                <span className="text-[11px] uppercase tracking-wider text-[#071d3d]/60 font-medium mb-1">
                  {et.officialCredential}
                </span>
                <span className="bg-slate-100 text-[#071d3d]/80 px-3 py-1 rounded font-mono text-[10px] tracking-widest border border-slate-205">
                  {selectedVirtualCert.credentialId}
                </span>
                <span className="text-[8px] text-[#071d3d]/40 mt-1 font-mono uppercase">
                  HDBANK L&D VERIFIED
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}

