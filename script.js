// بيانات البوستات - 3 أنواع مختلفة
const postsData = [
    // 1. بوستات فيديو (نمط يوتيوب)
    {
        id: 1,
        type: 'video',
        videoUrl: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
        thumbnail: 'https://images.unsplash.com/photo-1530126483408-aa533e55bdb2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        title: '⚰️ تنصيب العراب الجديد',
        description: 'مراسم تنصيب دون كورليوني الجديد - لقطات حصرية من داخل القبو السري',
        views: '1.2M مشاهدة',
        duration: '15:30',
        date: '2024-01-20'
    },
    {
        id: 2,
        type: 'video',
        videoUrl: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
        thumbnail: 'https://images.unsplash.com/photo-1518133835878-5a93cc3f89e5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        title: '🔪 تصفية الحسابات',
        description: 'لحظة تصفية حسابات عائلة سوبرانو مع المنافسين - فيديو نادر',
        views: '890K مشاهدة',
        duration: '08:45',
        date: '2024-01-19'
    },
    {
        id: 3,
        type: 'video',
        videoUrl: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
        thumbnail: 'https://images.unsplash.com/photo-1573879541250-58ae8b322b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        title: '💰 اجتماع الكبار',
        description: 'اجتماع سري لخمس عائلات في قصر مهجور - تسريب صوتي مع صور',
        views: '2.5M مشاهدة',
        duration: '22:10',
        date: '2024-01-18'
    },

    // 2. بوستات صورة واحدة
    {
        id: 4,
        type: 'photo',
        imageUrl: 'https://images.unsplash.com/photo-1529688530647-93a6e1916f9f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        title: '🎭 خاتم العراب',
        description: 'خاتم عائلة كورليوني الذهبي المرصع بالدم...',
        location: 'صقلية، إيطاليا',
        date: '2024-01-17'
    },
    {
        id: 5,
        type: 'photo',
        imageUrl: 'https://images.unsplash.com/photo-1583173451852-9c1b6c6c3b0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        title: '🔫 المسدس الفضي',
        description: 'مسدس مايكل كورليوني الذي استخدمه في ليلة القديسين',
        location: 'متحف الجريمة، نيويورك',
        date: '2024-01-16'
    },
    {
        id: 6,
        type: 'photo',
        imageUrl: 'https://images.unsplash.com/photo-1542744094-3a31f272c2c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        title: '🍷 قبو النبيذ السري',
        description: 'قبو النبيذ السري تحت مطعم "لو فيش" - مكان الاجتماعات المفضل',
        location: 'بروكلين، نيويورك',
        date: '2024-01-15'
    },

    // 3. بوستات نص فقط (كلام)
    {
        id: 7,
        type: 'text',
        quote: 'سأقدم له عرضاً لا يمكنه رفضه... وإذا رفض، فهناك طرق أخرى للتفاهم.',
        author: 'دون فيتو كورليوني',
        context: 'الكتاب الأسود، الصفحة 44',
        date: '2024-01-14'
    },
    {
        id: 8,
        type: 'text',
        quote: 'ليس شخصياً... إنه مجرد عمل. مجرد عمل كبير جداً لدرجة أن العواطف لا مكان لها فيه.',
        author: 'مايكل كورليوني',
        context: 'وصية العراب',
        date: '2024-01-13'
    },
    {
        id: 9,
        type: 'text',
        quote: 'صديقك الوحيد في هذه الحياة هو المسدس الموجود في جيبك... احتفظ به دائماً نظيفاً ومستعداً.',
        author: 'آل كابوني',
        context: 'مقابلة مع صحيفة شيكاغو تريبيون',
        date: '2024-01-12'
    },
    {
        id: 10,
        type: 'text',
        quote: 'العائلة أهم من أي شيء... حتى من المال. لأن المال يأتي ويذهب، لكن العائلة تبقى.',
        author: 'جون جوتي',
        context: 'محاكمة العائلات الخمس',
        date: '2024-01-11'
    },
    {
        id: 11,
        type: 'photo',
        imageUrl: 'https://images.unsplash.com/photo-1573152958734-1922c188fba3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        title: '🕯️ كنيسة العائلة',
        description: 'الكنيسة التي دفن فيها أفراد عائلة جينوفيز - سراديب الموتى',
        location: 'بروكلين هايتس',
        date: '2024-01-10'
    },
    {
        id: 12,
        type: 'video',
        videoUrl: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
        thumbnail: 'https://images.unsplash.com/photo-1573879541250-58ae8b322b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        title: '⚔️ إعلان الحرب',
        description: 'لحظة إعلان الحرب بين عائلات لوس أنجلوس - فيديو حصري',
        views: '3.1M مشاهدة',
        duration: '18:20',
        date: '2024-01-09'
    }
];

// عرض البوستات في الصفحة
function displayPosts(posts) {
    const container = document.getElementById('posts-container');
    container.innerHTML = '';
    
    posts.forEach(post => {
        const postCard = document.createElement('div');
        postCard.className = `post-card ${post.type}`;
        
        let content = '';
        
        switch(post.type) {
            case 'video':
                content = `
                    <div class="video-wrapper">
                        <video poster="${post.thumbnail}" controls>
                            <source src="${post.videoUrl}" type="video/mp4">
                            متصفحك لا يدعم الفيديو
                        </video>
                        <div class="video-title-overlay">
                            <h3>${post.title}</h3>
                        </div>
                    </div>
                    <div class="post-content">
                        <h3 class="post-title">${post.title}</h3>
                        <p class="post-description">${post.description}</p>
                        <div class="video-stats">
                            <span><i class="fas fa-eye"></i> ${post.views}</span>
                            <span><i class="fas fa-clock"></i> ${post.duration}</span>
                            <span><i class="fas fa-calendar-alt"></i> ${post.date}</span>
                        </div>
                    </div>
                `;
                break;
                
            case 'photo':
                content = `
                    <div class="photo-wrapper">
                        <img src="${post.imageUrl}" alt="${post.title}">
                        <div class="photo-overlay">
                            <i class="fas fa-skull"></i>
                        </div>
                    </div>
                    <div class="post-content">
                        <h3 class="post-title">${post.title}</h3>
                        <p class="post-description">${post.description}</p>
                        <div class="post-meta">
                            <span class="post-category"><i class="fas fa-map-marker-alt"></i> ${post.location}</span>
                            <span class="post-date">${post.date}</span>
                        </div>
                    </div>
                `;
                break;
                
            case 'text':
                content = `
                    <div class="text-content">
                        <div class="blood-quote">
                            ${post.quote}
                        </div>
                        <div class="blood-author">
                            ${post.author}
                        </div>
                        <p style="color: #666; margin-top: 1rem; font-size: 0.9rem;">
                            <i class="fas fa-book-open"></i> ${post.context}
                        </p>
                        <div style="margin-top: 1rem; color: #8b0000; font-size: 0.8rem;">
                            ${post.date}
                        </div>
                    </div>
                `;
                break;
        }
        
        postCard.innerHTML = content;
        container.appendChild(postCard);
    });
}

// فلترة البوستات
function filterPosts(filterType) {
    if (filterType === 'all') {
        displayPosts(postsData);
    } else {
        const filtered = postsData.filter(post => post.type === filterType);
        displayPosts(filtered);
    }
    
    // تحديث حالة الأزرار
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.filter === filterType) {
            btn.classList.add('active');
        }
    });
}

// إضافة مؤثرات صوتية وهمية
function createSoundWave() {
    const soundWave = document.createElement('div');
    soundWave.className = 'sound-wave';
    for (let i = 0; i < 5; i++) {
        const span = document.createElement('span');
        soundWave.appendChild(span);
    }
    document.body.appendChild(soundWave);
}

// تفعيل كل شيء عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', () => {
    // عرض كل البوستات
    displayPosts(postsData);
    
    // إضافة مؤثر الصوت الوهمي
    createSoundWave();
    
    // إضافة أزرار الفلترة
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const filterType = e.target.dataset.filter;
            filterPosts(filterType);
            
            // تأثير اهتزاز عند التبديل
            e.target.style.animation = 'none';
            e.target.offsetHeight;
            e.target.style.animation = 'glitch 0.5s';
        });
    });
    
    // تأثيرات دخول البوستات
    const posts = document.querySelectorAll('.post-card');
    posts.forEach((post, index) => {
        post.style.opacity = '0';
        post.style.transform = 'translateY(50px)';
        setTimeout(() => {
            post.style.transition = 'all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
            post.style.opacity = '1';
            post.style.transform = 'translateY(0)';
        }, 100 * index);
    });
    
    // تحكم بالفيديو - إيقاف التشغيل عند التمرير (مثل يوتيوب)
    const videos = document.querySelectorAll('video');
    window.addEventListener('scroll', () => {
        videos.forEach(video => {
            const rect = video.getBoundingClientRect();
            const isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;
            if (!isVisible && !video.paused) {
                video.pause();
            }
        });
    });
});

// إضافة صوت الرصاص عند النقر (اختياري)
document.addEventListener('click', () => {
    // يمكنك إضافة صوت gunshot هنا
    console.log('🔫 صوت رصاص');
});