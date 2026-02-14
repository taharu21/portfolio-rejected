<script>
const profile = document.querySelector('.profile-image');

document.addEventListener('mousemove', (e) => {
    const rect = profile.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    // Rotate the before pseudo-element based on mouse
    profile.style.setProperty('--rotateX', `${y * 0.1}deg`);
    profile.style.setProperty('--rotateY', `${x * 0.1}deg`);
});
</script>
