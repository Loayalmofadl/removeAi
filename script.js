document.getElementById('removeBgBtn').addEventListener('click', function() {
    const fileInput = document.getElementById('imageInput');
    const resultImage = document.getElementById('resultImage');
    const downloadLink = document.getElementById('downloadLink');

    if (fileInput.files.length === 0) {
        alert('يرجى اختيار صورة أولاً');
        return;
    }

    const file = fileInput.files[0];
    const formData = new FormData();
    formData.append('image_file', file);

    fetch('https://api.remove.bg/v1.0/removebg', {
        method: 'POST',
        headers: {
            'X-Api-Key': 'efdrm5hWGv6QV7fi2XBbR3uy'
        },
        body: formData
    })
    .then(response => response.blob())
    .then(blob => {
        const url = URL.createObjectURL(blob);
        resultImage.src = url;
        resultImage.style.display = 'block';
        downloadLink.href = url;
        downloadLink.style.display = 'inline-block';
    })
    .catch(error => {
        console.error('Error:', error);
        alert('حدث خطأ أثناء معالجة الصورة');
    });
});
