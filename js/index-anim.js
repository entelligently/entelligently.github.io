
document.addEventListener('DOMContentLoaded', () => {
    //Intitial page load animation
    anime.timeline({
        easing: 'easeOutExpo',
    })
    .add({
        targets: '#blurb img',
        translateX: [-100, 0],
        opacity: [0, 1]
    })
    .add({
        targets: '#blurb img:after',
        opacity: [0, 1],
        offset: '-=100',
    })
    .add({
        targets: '#tagline',
        translateY: [100, 0],
        opacity: [0, 1],
        offset: '-=200',
    })
    .add({
        targets: '#description',
        translateY: [100, 0],
        opacity: [0, 1],
        offset: '-=200',
    })
    .add({
        targets: '#ctaContain .btn.btn-primary',
        translateX: [100, 0],
        opacity: [0, 1],
        duration: 200,
        offset: '-=200',
    })
    .add({
        targets: '#ctaContain .btn.btn-purple',
        translateX: [100, 0],
        opacity: [0, 1],
        duration: 200,
        offset: '-=100',
    })
    .add({
        targets: '#ctaContain .btn.btn-accent',
        translateX: [100, 0],
        opacity: [0, 1],
        duration: 200,
        offset: '-=100',
    })
    .add({
        targets: '#readmore-link',
        opacity: [0, 1],
        offset: '-=700',
    })
})