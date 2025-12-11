const data = {
    // 语言切换 (Language Switch)
    language_switch: { label: "English", link: "./CV/index.html" },

    // 导航栏链接
    navbar: [
        { name: "Homepage", link: "" },
        { name: "Google Scholar", link: "https://scholar.google.com/citations?user=GQUDu68AAAAJ&hl=zh-CN" },
        { name: "DBLP", link: "https://dblp.org/pid/158/9418.html" },
        { name: "SZU", link: "https://www.szu.edu.cn/" }
    ],

    // 个人基本信息
    profile: {
        name_cn: "李元满",
        name_en: "Dr. Yuanman Li",
        title: "深圳大学 (Shenzhen University)",
        image: "./image/lym.jpg",
        bio: `<p>李元满，博士，副教授，IEEE Senior 会员。于2012年获重庆大学软件工程专业学士学位。毕业后以全额奖学金推免至澳门大学深造，并分别于2015年和2018年获得澳门大学软件工程硕士学位和计算机科学博士学位（导师：周建涛教授）。2018年9月至2019年8月于澳门大学智慧城市物联网国家重点实验室从事博士后研究。2019年9月至今就职于深圳大学电子与信息工程学院。</p>
        <p>长期从事多媒体信息安全、计算机视觉等领域的科研工作，获评深圳市“孔雀计划”海外高层次人才C类。主持多项国家自然科学基金项目、省部级自然科学基金项目以及上市企业横向项目，在 T-IP、T-IFS、T-SC、T-CSVT、T-MM、T-NNLS、CVPR、ACM MM、AAAI 等国际权威期刊和会议上发表论文60余篇，研究成果荣获2022年澳门科学技术自然科学奖。担任信号处理国际著名期刊 IEEE Signal Processing Letters (SPL) 副编辑，IEEE Transactions on Image Processing、IEEE Transactions on Information Forensics and Security 等多个期刊审稿人，以及多个国际会议的领域主席。</p>`
    },

    // 教学科目	
    teaching: [
        "大数据分析（本科生）",
        "专业综合设计（本科生）",
        "机器学习（研究生）",
        "图像与音视频处理技术及前沿应用（博士生）"
    ],

    // 奖项与荣誉
    awards: [
        "第一指导老师，赵志伟，钟启月，黄秋童，基于扩散模型的深度换脸溯源算法设计与实现，第七届中国研究生人工智能创新大赛全国一等奖(2025)",
        "澳门科学技术自然科学奖三等奖（排名第二），澳门特别行政区（2022）",
        "深圳市优秀科技创新人才，深圳市科技创新委员会（2022）",
        "澳门研究生科技研发奖，澳门科学技术发展基金（2018）",
        "研究生全额奖学金，澳门大学（2012-2015）",
        "重庆大学优秀毕业生，重庆大学（2012）",
        "国家奖学金，中华人民共和国教育部（2011）",
        "全国大学生数学建模大赛全国二等奖，教育部（2010）"
    ],

    // 招聘信息 (支持 HTML)
    positions: [
        "招 <b>2026年9月份入学</b><span class='red'> 博士生 1 名</span>，感兴趣的学生请发我简历！",
        "常年招 <b>9月份入学</b> 计算机科学，软件工程，电子信息，数学等方向研究生若干名",
        "常年招 <b>博士后（Postdoc. Position）</b> 若干名（37W RMB）<a href='http://muchong.com/t-14710336-1' target='_blank'>招聘链接</a>"
    ],

    // 研究方向 (Research Interests)
    interests: [
        "多媒体取证与安全 (Multimedia Forensics and Security)",
        "可信人工智能 (Trustworthy AI)",
        "计算机视觉 (Computer Vision)"
    ],

    // 最新动态 (News)
    news: [
        { tag: "<span class='red'>New!!!</span>", content: "团队荣获2025第七届中国研究生人工智能创新大赛全国一等奖" },
        { tag: "<span class='red'>New!!!</span>", content: "One paper is accepted in <b>TAI 2025</b>" },
		{ tag: "<span class='red'>New!!!</span>", content: "One paper is accepted in <b>TAC 2025</b>" },
        { tag: "<span class='red'>New!!!</span>", content: "Two papers are accepted in <b>TDSC 2025</b>" },
		{ tag: "<span class='red'>New!!!</span>", content: "one papers is accepted in <b>AAAI 2026</b>" },
        { tag: "<span class='red'>New!!!</span>", content: "One paper is accepted in <b>TITS 2025</b>" },
        { tag: "<span class='red'>New!!!</span>", content: "One paper is accepted in <b>TIP  2025</b>" },
        { tag: "<span class='red'>New!!!</span>", content: "One paper is accepted in <b>NeurIPS 2025</b>" },
    ],

    // 学术服务
    activities: [
        "gdcsig第十五届粤港澳图象图形学术会议，技术支持主席, (2025)",
        "IEEE Signal Processing Letters, Associate Editor, (2024-至今)",
        "Senior Member of IEEE (2024-至今)",
        "广东省智能信息处理重点实验室学术部部长 (2023.12-至今)",
        "中国图像图形学会（CSIG）-数字媒体取证与安全专业委员会委员 (2020.11-至今)"
    ],

    // 基金项目 (Funding)
    funding: [
        "国家自然科学基金面上项目, 2026.01-2029.12, <b>500,000RMB.</b>",
        "中科学院化物所战略先导A类外协项目, 2025.01-2026.12, <b>1,000,000RMB.</b>",
        "广东省自然科学基金面上项目, 2025.01-2027.12, <b>100,000RMB.</b>",
        "国家重点实验室开放项目, 2023.01-2024.12, <b>80,000MOP.</b>",
        "腾讯“犀牛鸟”-青年教师科研基金项目, 2023.01-2024.12, <b>50,000RMB.</b>",
        "CCF-阿里巴巴创新研究计划, 2022.08-2023.07, <b>300,000RMB.</b>",
        "深圳市优秀科技创新人才项目, 2022.04-2024.04, <b>300,000RMB.</b>",
        "广东省自然科学基金面上项目, 2022.01-2024.12, <b>100,000 RMB.</b>",
        "国家自然科学基金青年项目, 2021.01-2022.12, <b>300,000RMB.</b>",
        "Overseas High-Caliber Personnel Fund, 2021.01-2022.12, <b>2,700,000 RMB.</b>",
        "广东省自然科学基金区域联合项目, 2020.01-2021.12, <b>100,000 RMB.</b>",
        "Natural Science Foundation of Shenzhen University, 2020.01-2022.12, <b>200,000 RMB.</b>"
    ],

    // 论文列表 - 期刊 (Journal)
    // 注意：无需手动加 span，系统会自动高亮名字
    journal_papers: `
Yuanman Li, Zhiwei Zhao, Jiaxiong Ye, Yulong Zheng, Bin Li, Rongrong Ni, Wei Wang, and Xia Li,"Adaptive Container Characterization via Language Mapping for Video Integrity and Source Analysis," IEEE Transactions on artificial intelligence (T-AI), in press, 2025.
Qifeng Lai,Han Liu,Yuanman Li,Zhiguo Gong and Wei Wang, "Emotions Like Human: Self-Supervised Emotion Label Augmentation for Emotion Recognition in Conversation," IEEE Transactions on Affective Computing (T-AC), in press, 2025.
F. Yan, Fangjun Yan, Xiaojian Ji, Li Dong, Weiwei Sun, Yuanman Li, “Universal and Quality-Preserving Watermark Removal Based on Unpaired Learning,” IEEE Transactions on Dependable and Secure Computing (T-DSC), in press, 2025.
H. Wu, Y. Chen, J. Zhou and Y. M. Li, "Rethinking Image Forgery Detection via Soft Contrastive Learning and Unsupervised Clustering," IEEE Transactions on Dependable and Secure Computing (T-DSC), vol. 22, no. 6, pp. 6296-6308, 2025.
Enji Liang, Kuiyuan Zhang, Zhongyun Hua, Yuanman Li, and Xiaohua Jia, “TransCMFD: An adaptive transformer for copy-move forgery detection,” Neurocomputing, Volume 638, 2025.
Rongqin Liang, Yuanman Li, Yingxin Yi, Jiantao Zhou, and Xia Li, “A memory-augmented multi-task collaborative framework for unsupervised traffic anomaly detection in driving videos,” Pattern Recognition, Volume 168, 2025.
R. Liang, Y. M. Li, Z. Wu and X. Li, "An Interaction-Scene Collaborative Representation Framework for Detecting Traffic Anomalies in Driving Videos," IEEE Transactions on Intelligent Transportation Systems (T-ITS), in press, 2025.
Xinyi Su, Yuanman Li*, Yulong Zheng, and Xia Li, "Dual-Stream Image Sharing Chain Detection via Dynamic Information Compensation," IEEE Signal Processing Letters, vol. 32, pp. 1311-1315, 2025
Yuanman Li, Yinjie He, Changsheng Chen, Li Dong, Bin Li, Jiantao Zhou and Xia Li, “Image Copy-Move Forgery Detection via Deep PatchMatch and Pairwise Ranking Learning,” IEEE Transactions on Image Processing (T-IP), vol. 34, pp. 425-440, 2025.
Rongqin Liang, Yuanman Li*, Ce Xie, Rongqin Liang, Jie Du, Jiantao Zhou and Xia Li, “STGlow: A Flow-Based Generative Framework With Dual-Graphormer For Pedestrian Trajectory Prediction”, IEEE Transactions on Neural Networks and Learning Systems (T-NNLS), 16504-16517, 2024.
Yuanman Li, Liangpei Hu, Li Dong, Haiwei Wu, Jinyu Tian, Jiantao Zhou and Xia Li, “Transformer-Based Image Inpainting Detection via Label Decoupling and Constrained Adversarial Training”, IEEE Transactions on Circuits and Systems for Video Technology (T-CSVT), pp.1857-1872, 2024.
Rongqin Liang, Yuanman Li*, Jiantao Zhou, and Xia Li, “Text-Driven Traffic Anomaly Detection with Temporal High-Frequency Modeling in Driving Videos”, IEEE Transactions on Circuits and Systems for Video Technology (T-CSVT), in press, 2024.
Yuanman Li, Lanhao Ye, Haokun Cao, Wei Wang, and Zhongyun Hua, “Cascaded Adaptive Graph Representation Learning for Image Copy-Move Forgery Detection”, ACM Transactions on Multimedia Computing Communications and Applications (TOMM), in press, 2024.
Yuanman Li, Jiaxiong Ye, Limin Zeng, Rongqin Liang, Xianwei Zheng, Weiwei Sun, and Na Wang, “Learning Hierarchical Fingerprints via Multi-Level Fusion for Video Integrity and Source Analysis”, IEEE Transactions on Consumer Electronics (TCE), pp.3414-3424, 2024.
Yuanman Li, Jiaxiang You, Jiantao Zhou, Wei Wang, Xin Liao and Xia Li, “Image Operation Chain Detection with Machine Translation Framework”, IEEE Transactions on Multimedia (T-MM), pp.6852-6867, 2023.
Jie Du, Kai Guan, Yanhong Zhou, Yuanman Li* and Tianfu Wang, “Parameter-Free Similarity-Aware Attention Module for Medical Image Classification and Segmentation”, IEEE Transactions on Emerging Topics in Computational Intelligence (T-ETCI), pp.845-857, 2023.
Yuanman Li, Minhua Liu, Jinyu Tian, Jie Du, and Xia Li, “Operation History Estimation and Its Application to Multi-Degraded Image Restoration”, IEEE Transactions on Consumer Electronics (T-CE), pp.863-875, 2023.
Yuanman Li, J. T. Zhou, J. Y. Tian, X. W. Zheng and Y. Y .Tang, “Weighted Error Entropy based Information Theoretic Learning for Robust Subspace Representation”, IEEE Transactions on Neural Networks and Learning Systems (T-NNLS), vol. 33, no. 9, pp. 4228-4242, 2022.
Yuanman Li and J. T. Zhou, “Fast and Effective Image Copy-Move Forgery Detection via Hierarchical Feature Point Matching”, IEEE Transactions on Information Forensics and Security (T-IFS), vol. 14, no. 5, pp. 1307-1322, 2019.
Yuanman Li, J. T. Zhou, and A. Cheng, “SIFT Keypoint Removal via Directed Graph Construction for Color Images”, IEEE Transactions on Information Forensics and Security (T-IFS), vol. 12, no. 12, pp. 2971-2985, 2017.
Yuanman Li, J. T. Zhou, A. Cheng, X. M. Liu, and Y. Y. Tang, “SIFT Keypoint Removal and Injection via Convex Relaxation”, IEEE Transactions on Information Forensics and Security (T-IFS), vol. 11, no. 8, pp. 1722-1735, 2016.
Yuanman Li, Jiantao Zhou and Xia Li, “Robust Matrix Factorization via Minimum Weighted Error Entropy Criterion”, IEEE Transactions on Computational Social Systems (T-CSS), vol.9, no.6, pp.1830-1841, 2022.
Yuanman Li, R. Q. Liang, W. Wei, W. Wang, J. T. Zhou and X. Li, “Temporal Pyramid Network with Spatial-Temporal Attention for Pedestrian Trajectory Prediction”, IEEE Transactions on Network Science and Engineering (T-NSE), vol.9, no.3, pp.1006-1019, 2022.
Yuanman Li, Ce Xie, Rongqin Liang, Jie Du, Jiantao Zhou and Xia Li, “A Synchronous Bi-Directional Framework With Temporally Dependent Interaction Modeling for Pedestrian Trajectory Prediction”, IEEE Transactions on Network Science and Engineering (T-NSE), in press, 2023.
Yuanman Li and J. T. Zhou, “Anti-Forensics of Lossy Predictive Image Compression”, IEEE Signal Processing Letters (SPL), vol. 22, no. 12, pp. 2219-2223, 2015.
Zhongyun Hua, Ziyi Wang, Yifeng Zheng, Yongyong Chen and Yuanman Li*, “Enabling Large-Capacity Reversible Data Hiding Over Encrypted JPEG Bitstreams”, IEEE Transactions on Circuits and Systems for Video Technology (T-CSVT), vol. 33, no. 3,pp.1003-1018, 2023.
Jie Du, Kai Guan, Peng Liu,Yuanman Li* and Tianfu Wang, “Boundary-Sensitive Loss Function With Location Constraint for Hard Region Segmentation”, IEEE Journal of Biomedical and Health Informatics (JBHI), pp.992-1003, 2023.
Junyang Chen, Zhiguo Gong,Yuanman Li*, Huanjian Zhang, Hongyong Yu, JunzhangZhu, Ge Fan, Xiao-Ming Wu and Kaishun Wu, “Meta-Path Based Neighbors for Behavioral Target Generalization in Sequential Recommendation”, IEEE Transactions on Network Science and Engineering (T-NSE), pp.1658-1667, 2022.
Kuiyuan Zhang, Zhongyun Hua, Yuanman Li, Yongyong Chen and Yicong Zhou, “AMS-Net: Adaptive Multi-Scale Network for Image Compressive Sensing”, IEEE Transactions on Multimedia (T-MM), in press, 2022.
Junyang Chen, Xueliang Li, Yuanman Li, Paul Li, Mengzhu Wang, Xiang Zhang, Zhiguo Gong, Kaishun Wu and Victor C.M. Leung, “A Simple Yet Effective Layered Loss for Pre-Training of Network Embedding”, IEEE Transactions on Network Science and Engineering (T-NSE), pp.1827-1837, 2022.
Y. C. Su, J. Du, Yuanman Li*, X. Li, Z. Y. Hua and J. T Zhou, “Trajectory Forecasting Based on Prior-Aware Directed Graph Convolutional Neural Network”, IEEE Transactions on Intelligent Transportation Systems (T-ITS), vol.23, no.9, pp. 16773-16785, 2022.
K. Y. Zhang, Z. Y. Hua, Yuanman Li, Y. S. Zhang and Y. C. Zhou, "Uformer-ICS: A U-Shaped Transformer for Image Compressive Sensing Service," IEEE Transactions on Services Computing, accepted, 2023. 
H. W. Wu, J. T. Zhou and Yuanman Li, “Deep Generative Model for Image Inpainting with Local Binary Pattern Learning and Spatial Attention”, IEEE Transactions on Multimedia (T-MM), vol. 24, pp. 4016-4027, 2022.
W. W. Sun, J. T. Zhou, Yuanman Li, M. Cheung and J. She, “Robust High Capacity Watermarking over Online Social Network Shared Images”, IEEE Transactions on Circuits and Systems for Video Technology (T-SCVT), vol.31, pp.1208-1221, 2021.
J. Duan, J. T. Zhou and Yuanman Li, “Secure and Verifiable Outsourcing of Large-scale Nonnegative Matrix Factorization (NMF)”, IEEE Transactions on Services Computing (T-SC), vol. 14, no. 6, pp. 1940-1953,2021.
Z. Y. Hua, K. Y. Zhang, Yuanman Li and Y. C. Zhou, “Visually secure image encryption using adaptive-thresholding sparsification and parallel compressive sensing”, Signal Processing, vol.183, pp. 107998, 2021.
Z. Y. Hua, Z. H. Zhu, Y. Y. Chen and Yuanman Li , “Color image encryption using orthogonal Latin squares and a new 2D chaotic system”, Nonlinear Dynamics, vol.104, pp. 4505-4522, 2021.
Z. Y. Hua, J. X. Li, Yuanman Li and Y. Y. Chen “Image encryption using value-differencing transformation and modified ZigZag transformation”, Nonlinear Dynamics, vol.106, pp.3583-3599, 2021.
J. Duan, J. T. Zhou and Yuanman Li, “Privacy-Preserving distributed deep learning based on secret sharing”, Information Science, vol. 527, pp. 108-127, 2020.
`,

    // 论文列表 - 会议 (Conference)
    conference_papers: `
Yuhao He, Jinyu Tian, Xianwei Zheng, Li Dong, Yuanman Li, Jiantao Zhou, "Deferred Poisoning: Making the Model More Vulnerable via Hessian Singularization" AAAI Conference on Artificial Intelligence (AAAI), 2026. 
Han Liu, Jiaqi Li, Zhi Xu, Xiaotong Zhang, Xiaoming Xu, Fenglong Ma, Yuanman Li, Hong Yu， “HQA-VLAttack: Towards High Quality Adversarial Attack on Vision-Language Pre-Trained Models”, NeurIPS, 2025.
Yuanman Li, J. T. Zhou, X. W. Zheng, J. Y. Tian and Y. Y. Tang, “Robust Subspace Clustering with Independent and Piecewise Identically Distributed (i.p.i.d.) Noise Modeling”, IEEE Conf. Comput. Vis. and Pattern Recogn. (CVPR), 2019 (oral, top 5% paper).
Yuchao Su，Yuanman Li*, Wei Wang, Jiantao Zhou, and Xia Li, “A Unified Environmental Network for Pedestrian Trajectory Prediction”, AAAI Conference on Artificial Intelligence (AAAI), 2024，
Yuxuan Tan, Yuanman Li*, Limin Zeng, Jiaxiong Ye, Wei Wang and Xia Li, “Multi-scale Target-Aware Framework for Constrained Image Splicing Detection and Localization”, ACM Multimedia (ACM MM), 2023.
R. Q. Liang, Yuanman Li *, X. Li, Y. Tang, J. T. Zhou and W. B. Zou, “Temporal Pyramid Network for Pedestrian Trajectory Prediction with Multi-Supervision”, AAAI Conference on Artificial Intelligence (AAAI), 2021.
J. X. You, Yuanman Li*, J. T. Zhou, Z. Y. Hua, W. W. Sun and X. Li, “A Transformer based Approach for Image Manipulation Chain Detection”, ACM Multimedia (ACM MM), 2021.
J. Y. Tian, J. T. Zhou, Yuanman Li and J. Duan, “Detecting Adversarial Examples from Sensitivity Inconsistency of Spatial-Transform Domain”, AAAI Conference on Artificial Intelligence (AAAI), 2021.
Y. Y. Li, J. T. Zhou, and Yuanman Li, “Ciphertext-Only Attack on an Image Homomorphic Encryption Scheme with Small Ciphertext Expansion”, In Proceedings of ACM Multimedia (ACM MM), 2015.
Yingjie He, Yuanman Li*, Changsheng Chen and Xia Li, “Image Copy-Move Forgery Detection via Deep CrossScale PatchMatch”, IEEE International Conference on Multimedia and Expo (ICME), pp.2327-2332, 2023 (oral, top 15% paper).
Minhua Liu, Yuanman Li*, Rongqin Liang, Jiaxiang You and Xia Li, “Multiple Degraded Image Restoration via Degradation History Estimation”, IEEE International Conference on Multimedia and Expo (ICME), pp.528-533, 2023 (oral, top 15% paper).
Jiaxiang You, Yuanman Li*, Rongqin Liang, Yuxuan Tan, Jiantao Zhou and Xia Li, “Image Sharing Chain Detection via Sequence-To-Sequence Model”, IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP), pp.1-6, 2023 (oral, top 15% paper).
Ce Xie, Yuanman Li*, Rongqin Liang, Li Dong and Xia Li, “Synchronous Bi-directional Pedestrian Trajectory Prediction with Error Compensation”, Asian Conference on Computer Vision (ACCV), pp.2796-2812, 2022.
Liangpei Hu, Yuanman Li*,Jiaxiang You, Rongqin Liang and Xia Li, “An Edge-Aware Transformer Framework for Image Inpainting Detection”, International Conference on Artificial Intelligence and Security (ICAIS), pp.648-660, 2022.
Weipeng Liang, Li Dong, Rangding Wang, Diqun Yan and Yuanman Li, “Robust Document Image Forgery Localization Against Image Blending”, IEEE International Conference on Trust, Security and Privacy in Computing and Communications (TrustCom), pp.810-817, 2022.
Li Dong, Jie Wang, Rangding Wang, Yuanman Li and Weiwei Sun “Towards Image Data Hiding via Facial Stego Synthesis with Generative Model”, International Joint Conference on Artificial Intelligence - International Workshop on Safety & Security of Deep Learning (IJCAI -Workshop), in press, 2021.
W. Wang, B. X. Lu, Yuanman Li, W. Wei, J. Q. Li, S. Mumtaz and M. Guizani, “Task Scheduling Game Optimization for Mobile Edge Computing”, IEEE International Conference on Communications (ICC), in press, 2021.
H.W.WU, J.T. Zhou, Yuanman Li, “Image Reconstruction from Local Descriptors Using Conditional Adversarial Networks“, APSIPA Annual Summit and Conference (ASC), 2019. (Oral)
Yuanman Li and J. T. Zhou, “Image Copy-Move Forgery Detection Using Hierarchical Feature Point Matching”, APSIPA Annual Summit and Conference (ASC), 2016. (Oral)
J. Duan, J. T. Zhou, and Yuanman Li, “Secure and Verifiable Outsourcing of Nonnegative Matrix Factorization (NMF)”, ACM Workshop on Information Hiding and Multimedia Security (IH&MMSec-16), 2016.
A. Cheng, Yuanman Li, and J. T. Zhou, “SIFT Keypoint Removal via Convex Relaxation”, IEEE International Conference on Multimedia and Expo (ICME-15), 2015 (oral, top 15% paper).
Y. Y. Li, J. T. Zhou, Yuanman Li, and O. C. Au, “Reducing the Ciphertext Expansion in Image Homomorphic Encryption via Linear Interpolation Technique”, IEEE Global Conference on Signal and Information Processing (GlobalSIP), 2015.
Yuanman Li and J. T. Zhou, “Sparsity-driven reconstruction of L_\infinity-decoded images”,IEEE International Conference on Image Processing (ICIP), 2014.
`,

    // 联系方式
    contact: {
        address: "办公室：深圳市南山区南海大道深圳大学沧海校区电子与信息工程学院N605",
        email: "E-mail: yuanmanli@szu.edu.cn"
    }
};
