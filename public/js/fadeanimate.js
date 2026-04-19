// // 自動でアニメーションを適用する関数
// const autoAnimate = (selector) => {
//     const parent = document.querySelector(selector);
//     if (!parent) return;
//     // 監視対象をすべて取得
//     const targets = parent.querySelectorAll('h1, h2, h3, h4, p, span, li, a, .c-visual-box, .c-section-title');

//     const observer = new IntersectionObserver((entries) => {
//         // 現在の交差判定で「画面に入った」ものだけを抽出
//         const visibleEntries = entries.filter(entry => entry.isIntersecting);
//             alert('dfas');

//         visibleEntries.forEach((entry, index) => {
//             const target = entry.target;

//             // すでにアニメーション済みの場合はスキップ
//             if (target.classList.contains('is-visible')) return;

//             // 【ここが肝！】同じタイミングで見えた要素同士に、順番にディレイをかける
//             // index を使うことで、0s, 0.1s, 0.2s... と自動でズレます
//             target.style.transitionDelay = `${index * 0.1}s`;
            
//             target.classList.add('is-visible');
//             observer.unobserve(target);
//         });
//     }, {
//         root: null,
//         rootMargin: '0px 0px -15% 0px', // 15%くらい入ったら発火（微調整済み）
//         threshold: 0
//     });

//     targets.forEach(target => observer.observe(target));
// };

// // 実行部分はそのまま
// document.addEventListener('DOMContentLoaded', () => {
//     const targetSections = ['#MessageSection', '#ServiceSection', '#ProductsSection', '#footer'];
//     targetSections.forEach(section => autoAnimate(section));
// });