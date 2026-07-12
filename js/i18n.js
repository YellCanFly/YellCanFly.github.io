/* ============================================
   Site-wide English / Chinese localization
   ============================================ */
(function () {
  const STORAGE_KEY = 'site-language';

  const translations = {
    en: {
      'nav.home': 'Home',
      'nav.publications': 'Publications',
      'nav.projects': 'Projects',
      'nav.cv': 'CV',
      'nav.gallery': 'Gallery',
      'nav.toggleMenu': 'Toggle menu',
      'language.switchTo': '切换为中文',

      'home.meta.title': 'Kexiang Huang — Homepage',
      'home.meta.description': 'Kexiang Huang — PhD in Crowd Simulation, Virtual Reality, and Human-Computer Interaction.',
      'home.about.title': 'About Me',
      'home.about.p1': 'I received my PhD from Beijing Institute of Technology (BIT) and was a visiting PhD student at Universitat Politècnica de Catalunya (UPC). In September 2026, I will join Beijing Film Academy as a Lecturer. My research focuses on Crowd Simulation, Virtual Reality, and Human-Computer Interaction.',
      'home.about.p2': 'I have a strong passion for building interactive virtual systems using Unreal Engine and Unity. A highlight of my work: in 2022, I developed a choreography and simulation system that supported the Opening Ceremony of the Beijing Winter Olympics.',
      'home.about.p3': 'Currently, I am particularly interested in intelligent multi-agent and crowd simulation systems driven by Reinforcement Learning and Large Language Models (LLMs), with the goal of creating simulations that are both technically rigorous and meaningfully impactful in the real world.',
      'home.interest.crowd': 'Crowd Simulation',
      'home.interest.rl': 'Reinforcement Learning',
      'home.interest.hci': 'Human-Computer Interaction',
      'home.interest.vr': 'Virtual Reality',
      'home.interest.developer': 'Unreal/Unity Developer',
      'home.news.title': 'News',
      'home.news.date.defense': 'May 28, 2026',
      'home.news.date.vr': 'Mar 23, 2026',
      'home.news.date.games': 'Nov 21, 2025',
      'home.news.date.virvig': 'Oct 31, 2024',
      'home.news.date.olympics': 'Feb 04, 2022',
      'home.news.badge.milestone': 'Milestone',
      'home.news.badge.talk': 'Talk',
      'home.news.badge.misc': 'Misc',
      'home.news.defense': 'Successfully defended my <strong>Ph.D. dissertation</strong>.',
      'home.news.vr': 'Presented our paper <em>Monkey See, Monkey Break? Imitation of Rule-Breaking in Virtual Crowds</em> at <strong>IEEE VR 2026</strong>, Daegu, Korea.',
      'home.news.games': 'Participated in the ending ceremony of the <strong>15th National Games of the People\'s Republic of China</strong>.',
      'home.news.virvig': 'Joined the research group <strong>ViRVIG</strong> under the supervision of <strong>Prof. Nuria Pelechano</strong>.',
      'home.news.olympics': 'Participated in the <strong>Opening Ceremony of the Beijing 2022 Winter Olympics</strong>.',
      'home.selected.title': 'Selected Publications',
      'home.selected.note': '* Equal contribution &nbsp;† Corresponding author &nbsp; <a href="publications.html">→ Full list</a>',
      'home.selected.viewAll': 'View All Publications →',
      'home.footer.updated': 'Last updated July 2026.',

      'common.showMore': 'Show more ({count} more) ▼',
      'common.showLess': 'Show less ▲',
      'common.copyright': 'Kexiang Huang.',
      'publication.link.paper': 'Paper',

      'publications.meta.title': 'Publications — Kexiang Huang',
      'publications.meta.description': 'Full publication list of Kexiang Huang — Crowd Simulation, Virtual Reality, and Human-Computer Interaction research.',
      'publications.title': 'Publications',
      'publications.intro': '<strong><u>Underline</u></strong> = first / corresponding author. &nbsp; Full list on <a href="https://scholar.google.com/citations?user=77A6XHMAAAAJ" target="_blank" rel="noopener noreferrer">Google Scholar</a>.',
      'publications.filter.all': 'All ({count})',
      'publications.filter.first': 'First Author ({count})',
      'publications.filter.journal': 'Journal',
      'publications.filter.coauthor': 'Co-author',

      'projects.meta.title': 'Projects — Kexiang Huang',
      'projects.meta.description': 'Research and open-source projects by Kexiang Huang — Crowd Simulation, Virtual Reality, and Human-Computer Interaction.',
      'projects.title': 'Projects',
      'projects.intro': 'A selection of research and open-source projects. See my <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer">GitHub</a> for more.',
      'projects.research': 'Research Projects',
      'projects.openSource': 'Open-Source &amp; Side Projects',
      'projects.one.title': 'Project Title One',
      'projects.one.desc': 'A brief description of this research project. What problem does it solve? What\'s the key insight or contribution?',
      'projects.two.title': 'Project Title Two',
      'projects.two.desc': 'Description of your second research project. Highlight the methodology, key results, or real-world impact.',
      'projects.three.title': 'Project Title Three',
      'projects.three.desc': 'Another research contribution. What datasets, benchmarks, or systems did this project produce?',
      'projects.tool.title': 'Open Source Tool',
      'projects.tool.desc': 'A useful tool or library you built. Mention the programming language, number of stars, or who uses it.',
      'projects.web.title': 'Web / App Project',
      'projects.web.desc': 'A web application, visualization, or interactive demo you\'ve developed as a side project or for a course.',
      'projects.link.paper': 'Paper',
      'projects.link.code': 'Code',
      'projects.link.demo': 'Demo',
      'projects.link.website': 'Website',
      'projects.link.dataset': 'Dataset',
      'projects.link.docs': 'Docs',
      'projects.link.liveDemo': 'Live Demo',
      'projects.tag.deepLearning': 'Deep Learning',
      'projects.tag.computerVision': 'Computer Vision',
      'projects.tag.benchmark': 'Benchmark',
      'projects.tag.dataset': 'Dataset',
      'projects.tag.library': 'Library',

      'cv.meta.title': 'CV — Kexiang Huang',
      'cv.meta.description': 'Curriculum Vitae of Kexiang Huang — PhD in Crowd Simulation and Virtual Reality.',
      'cv.title': 'Curriculum Vitae',
      'cv.download': 'Download PDF Version',
      'cv.education': 'Education',
      'cv.researchExperience': 'Research Experience',
      'cv.industryExperience': 'Industry Experience',
      'cv.honors': 'Honors &amp; Awards',
      'cv.publications': 'Publications',
      'cv.teaching': 'Teaching',
      'cv.service': 'Professional Service',
      'cv.skills': 'Skills',
      'cv.present': 'Present',
      'cv.toPresent': '— Present',
      'cv.summer2024': 'Summer 2024',
      'cv.summer2023': 'Summer 2023',
      'cv.fall2024': 'Fall 2024',
      'cv.since2022': '2022 – Present',
      'cv.visiting': 'Visiting PhD Student',
      'cv.phdCandidate': 'PhD Candidate',
      'cv.researchFocus': 'Research focus: Crowd Simulation, Virtual Reality, Human-Computer Interaction',
      'cv.researchAreas': 'Research areas: Crowd Simulation, Virtual Reality, Human-Computer Interaction, Intelligent Multi-Agent Systems (RL / LLM)',
      'cv.graduateAssistant': 'Graduate Research Assistant',
      'cv.labPlaceholder': 'Lab Name, Your University',
      'cv.researchAssistantDetail': 'Working on [research topic]. Developed [method/system] achieving state-of-the-art results on [benchmark].',
      'cv.researchIntern': 'Research Intern',
      'cv.researchLabPlaceholder': 'Company / Research Lab, City',
      'cv.researchInternDetail': 'Mentored by [Name]. Worked on [project]. Led to [outcome/paper/product].',
      'cv.softwareIntern': 'Software Engineering Intern',
      'cv.companyPlaceholder': 'Company Name, City',
      'cv.softwareInternDetail': 'Developed [feature/system] using [technologies]. Improved [metric] by X%.',
      'cv.bestPaper': 'Best Paper Award',
      'cv.fellowship': 'University Fellowship',
      'cv.fellowshipDetail': 'Full funding for first year of Ph.D.',
      'cv.scholarship': 'National Scholarship / Competitive Fellowship',
      'cv.universityPlaceholder': 'Your University',
      'cv.graduateSchoolPlaceholder': 'Your University Graduate School',
      'cv.grantingPlaceholder': 'Granting Organization',
      'cv.conferencePlaceholder': 'Conference / Workshop Name',
      'cv.workshopPlaceholder': 'NeurIPS 2025 Workshop on [Topic]',
      'cv.publicationsIntro': 'See <a href="publications.html">full publications page</a> for details and links.',
      'cv.teachingAssistant': 'Teaching Assistant — CS 101: Introduction to AI',
      'cv.teachingDetail': 'Led weekly discussion sections, held office hours, graded assignments.',
      'cv.reviewer': 'Reviewer',
      'cv.volunteer': 'Volunteer / Student Organizer',
      'cv.languages': 'Languages',
      'cv.spokenLanguageLabel': 'Languages',
      'cv.frameworks': 'Frameworks',
      'cv.tools': 'Tools',
      'cv.spokenLanguages': 'English (Fluent), Chinese (Native), [Other language]',

      'gallery.meta.title': 'Gallery — Kexiang Huang',
      'gallery.meta.description': 'Photo gallery of Kexiang Huang — conferences, research, and travels.',
      'gallery.title': 'Gallery',
      'gallery.intro': 'Snapshots from conferences, research life, travels, and beyond.',
      'gallery.conferences': 'Conferences &amp; Research',
      'gallery.lab': 'Lab &amp; Campus',
      'gallery.travel': 'Travel &amp; Life',
      'gallery.presenting': 'Presenting at NeurIPS 2025',
      'gallery.poster': 'Workshop poster session',
      'gallery.group': 'Lab group photo, Fall 2025',
      'gallery.lateNights': 'Late nights in the lab',
      'gallery.autumn': 'Campus in autumn',
      'gallery.summer': 'Summer in [City]',
      'gallery.hiking': 'Hiking in [Place]',
      'gallery.caption': 'Photo caption here',
      'gallery.enlargedAlt': 'Enlarged photo'
    },

    zh: {
      'nav.home': '首页',
      'nav.publications': '论文',
      'nav.projects': '项目',
      'nav.cv': '简历',
      'nav.gallery': '相册',
      'nav.toggleMenu': '展开或收起导航菜单',
      'language.switchTo': 'Switch to English',

      'home.meta.title': '黄可翔 — 个人主页',
      'home.meta.description': '黄可翔的个人学术主页，研究方向包括人群仿真、虚拟现实与人机交互。',
      'home.about.title': '个人简介',
      'home.about.p1': '我已获得 Beijing Institute of Technology (BIT) 博士学位，并曾在 Universitat Politècnica de Catalunya (UPC) 进行博士访学。2026 年 9 月，我将入职 Beijing Film Academy，担任讲师。我的研究方向包括人群仿真、虚拟现实与人机交互。',
      'home.about.p2': '我热衷于使用 Unreal Engine 和 Unity 构建交互式虚拟系统。2022 年，我开发了一套编排与仿真系统，为 Beijing 2022 Winter Olympics 开幕式提供了技术支持。',
      'home.about.p3': '目前，我尤其关注由强化学习和大语言模型（LLMs）驱动的智能多智能体与人群仿真系统，致力于构建兼具技术严谨性与现实影响力的仿真应用。',
      'home.interest.crowd': '人群仿真',
      'home.interest.rl': '强化学习',
      'home.interest.hci': '人机交互',
      'home.interest.vr': '虚拟现实',
      'home.interest.developer': 'Unreal/Unity 开发',
      'home.news.title': '动态',
      'home.news.date.defense': '2026 年 5 月 28 日',
      'home.news.date.vr': '2026 年 3 月 23 日',
      'home.news.date.games': '2025 年 11 月 21 日',
      'home.news.date.virvig': '2024 年 10 月 31 日',
      'home.news.date.olympics': '2022 年 2 月 4 日',
      'home.news.badge.milestone': '里程碑',
      'home.news.badge.talk': '报告',
      'home.news.badge.misc': '其他',
      'home.news.defense': '顺利通过<strong>博士学位论文答辩</strong>。',
      'home.news.vr': '在韩国大邱举行的 <strong>IEEE VR 2026</strong> 上报告了论文 <em>Monkey See, Monkey Break? Imitation of Rule-Breaking in Virtual Crowds</em>。',
      'home.news.games': '参与<strong>中华人民共和国第十五届运动会闭幕式</strong>。',
      'home.news.virvig': '加入 <strong>Prof. Nuria Pelechano</strong> 指导的研究团队 <strong>ViRVIG</strong>。',
      'home.news.olympics': '参与 <strong>Beijing 2022 Winter Olympics 开幕式</strong>。',
      'home.selected.title': '代表性论文',
      'home.selected.note': '* 共同贡献 &nbsp;† 通讯作者 &nbsp; <a href="publications.html">→ 完整列表</a>',
      'home.selected.viewAll': '查看全部论文 →',
      'home.footer.updated': '最后更新于 2026 年 7 月。',

      'common.showMore': '展开更多（另有 {count} 条）▼',
      'common.showLess': '收起 ▲',
      'common.copyright': 'Kexiang Huang.',
      'publication.link.paper': '论文',

      'publications.meta.title': '论文 — Kexiang Huang',
      'publications.meta.description': 'Kexiang Huang 的完整论文列表，研究方向包括人群仿真、虚拟现实与人机交互。',
      'publications.title': '论文',
      'publications.intro': '<strong><u>下划线</u></strong>表示第一作者或通讯作者。&nbsp; 完整列表请见 <a href="https://scholar.google.com/citations?user=77A6XHMAAAAJ" target="_blank" rel="noopener noreferrer">Google Scholar</a>。',
      'publications.filter.all': '全部（{count}）',
      'publications.filter.first': '第一作者（{count}）',
      'publications.filter.journal': '期刊论文',
      'publications.filter.coauthor': '合作作者',

      'projects.meta.title': '项目 — Kexiang Huang',
      'projects.meta.description': 'Kexiang Huang 的研究与开源项目，涵盖人群仿真、虚拟现实与人机交互。',
      'projects.title': '项目',
      'projects.intro': '以下是部分研究与开源项目。更多内容请见我的 <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer">GitHub</a>。',
      'projects.research': '研究项目',
      'projects.openSource': '开源与个人项目',
      'projects.one.title': '项目标题一',
      'projects.one.desc': '该研究项目的简要介绍：它解决了什么问题？核心见解或贡献是什么？',
      'projects.two.title': '项目标题二',
      'projects.two.desc': '第二个研究项目的介绍，重点说明研究方法、主要结果或现实影响。',
      'projects.three.title': '项目标题三',
      'projects.three.desc': '另一项研究成果。该项目产出了哪些数据集、基准或系统？',
      'projects.tool.title': '开源工具',
      'projects.tool.desc': '介绍你开发的实用工具或程序库，包括编程语言、Star 数量或使用者。',
      'projects.web.title': 'Web / App 项目',
      'projects.web.desc': '你作为个人项目或课程项目开发的 Web 应用、可视化工具或交互式演示。',
      'projects.link.paper': '论文',
      'projects.link.code': '代码',
      'projects.link.demo': '演示',
      'projects.link.website': '网站',
      'projects.link.dataset': '数据集',
      'projects.link.docs': '文档',
      'projects.link.liveDemo': '在线演示',
      'projects.tag.deepLearning': '深度学习',
      'projects.tag.computerVision': '计算机视觉',
      'projects.tag.benchmark': '基准',
      'projects.tag.dataset': '数据集',
      'projects.tag.library': '程序库',

      'cv.meta.title': '简历 — Kexiang Huang',
      'cv.meta.description': 'Kexiang Huang 的个人简历，研究方向为人群仿真与虚拟现实。',
      'cv.title': '个人简历',
      'cv.download': '下载 PDF 版本',
      'cv.education': '教育经历',
      'cv.researchExperience': '研究经历',
      'cv.industryExperience': '工作经历',
      'cv.honors': '荣誉与奖励',
      'cv.publications': '论文',
      'cv.teaching': '教学经历',
      'cv.service': '学术服务',
      'cv.skills': '技能',
      'cv.present': '至今',
      'cv.toPresent': '— 至今',
      'cv.summer2024': '2024 年夏季',
      'cv.summer2023': '2023 年夏季',
      'cv.fall2024': '2024 年秋季',
      'cv.since2022': '2022 年至今',
      'cv.visiting': '访问博士生',
      'cv.phdCandidate': '博士研究生',
      'cv.researchFocus': '研究方向：人群仿真、虚拟现实、人机交互',
      'cv.researchAreas': '研究方向：人群仿真、虚拟现实、人机交互、智能多智能体系统（RL / LLM）',
      'cv.graduateAssistant': '研究助理',
      'cv.labPlaceholder': '实验室名称，你所在的大学',
      'cv.researchAssistantDetail': '围绕[研究主题]开展工作，开发了[方法/系统]，并在[基准]上取得领先结果。',
      'cv.researchIntern': '研究实习生',
      'cv.researchLabPlaceholder': '公司 / 研究实验室，城市',
      'cv.researchInternDetail': '在[姓名]指导下参与[项目]，并产出[成果/论文/产品]。',
      'cv.softwareIntern': '软件工程实习生',
      'cv.companyPlaceholder': '公司名称，城市',
      'cv.softwareInternDetail': '使用[技术]开发[功能/系统]，将[指标]提升 X%。',
      'cv.bestPaper': '最佳论文奖',
      'cv.fellowship': '校级奖学金',
      'cv.fellowshipDetail': '博士第一学年全额资助。',
      'cv.scholarship': '国家奖学金 / 竞争性奖学金',
      'cv.universityPlaceholder': '你所在的大学',
      'cv.graduateSchoolPlaceholder': '你所在大学的研究生院',
      'cv.grantingPlaceholder': '颁发机构',
      'cv.conferencePlaceholder': '会议 / Workshop 名称',
      'cv.workshopPlaceholder': 'NeurIPS 2025 [主题] Workshop',
      'cv.publicationsIntro': '详情及相关链接请见<a href="publications.html">完整论文页面</a>。',
      'cv.teachingAssistant': '助教 — CS 101: Introduction to AI',
      'cv.teachingDetail': '负责每周讨论课、答疑时间及作业评分。',
      'cv.reviewer': '审稿人',
      'cv.volunteer': '志愿者 / 学生组织者',
      'cv.languages': '编程语言',
      'cv.spokenLanguageLabel': '自然语言',
      'cv.frameworks': '框架',
      'cv.tools': '工具',
      'cv.spokenLanguages': '英语（流利）、中文（母语）、[其他语言]',

      'gallery.meta.title': '相册 — Kexiang Huang',
      'gallery.meta.description': 'Kexiang Huang 的相册，记录学术会议、科研与旅行生活。',
      'gallery.title': '相册',
      'gallery.intro': '记录学术会议、科研生活、旅行以及更多精彩瞬间。',
      'gallery.conferences': '学术会议与科研',
      'gallery.lab': '实验室与校园',
      'gallery.travel': '旅行与生活',
      'gallery.presenting': '在 NeurIPS 2025 进行报告',
      'gallery.poster': 'Workshop 海报交流环节',
      'gallery.group': '实验室合影，2025 年秋季',
      'gallery.lateNights': '在实验室奋战的深夜',
      'gallery.autumn': '秋日校园',
      'gallery.summer': '[城市]之夏',
      'gallery.hiking': '在[地点]徒步',
      'gallery.caption': '在此填写照片说明',
      'gallery.enlargedAlt': '放大的照片'
    }
  };

  let currentLanguage = localStorage.getItem(STORAGE_KEY) === 'zh' ? 'zh' : 'en';

  function format(value, params) {
    return Object.keys(params || {}).reduce(function (result, key) {
      return result.replaceAll('{' + key + '}', params[key]);
    }, value);
  }

  function t(key, params) {
    const value = translations[currentLanguage][key] || translations.en[key] || key;
    return format(value, params);
  }

  function apply(root) {
    const scope = root || document;
    scope.querySelectorAll('[data-i18n]').forEach(function (element) {
      element.innerHTML = t(element.dataset.i18n);
    });
    scope.querySelectorAll('[data-i18n-content]').forEach(function (element) {
      element.setAttribute('content', t(element.dataset.i18nContent));
    });
    scope.querySelectorAll('[data-i18n-alt]').forEach(function (element) {
      element.setAttribute('alt', t(element.dataset.i18nAlt));
    });
    scope.querySelectorAll('[data-i18n-aria-label]').forEach(function (element) {
      element.setAttribute('aria-label', t(element.dataset.i18nAriaLabel));
    });
    document.documentElement.lang = currentLanguage === 'zh' ? 'zh-CN' : 'en';
  }

  function setLanguage(language) {
    currentLanguage = language === 'zh' ? 'zh' : 'en';
    localStorage.setItem(STORAGE_KEY, currentLanguage);
    apply(document);
    document.dispatchEvent(new CustomEvent('languagechange', {
      detail: { language: currentLanguage }
    }));
  }

  window.I18N = {
    apply: apply,
    getLanguage: function () { return currentLanguage; },
    setLanguage: setLanguage,
    t: t
  };

  document.addEventListener('DOMContentLoaded', function () {
    apply(document);
  });
})();
