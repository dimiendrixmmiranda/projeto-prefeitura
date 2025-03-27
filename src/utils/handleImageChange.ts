export default function handleImagemChange(
    event: React.ChangeEvent<HTMLInputElement>,
    setErroImagemTamanho: (valor: string | null) => void,
    setImagemBase64: (valor: string) => void,
    setImagemPreview: (valor: string) => void
) {
    const file = event.target.files?.[0];
    setErroImagemTamanho(null);

    if (!file) {
        setImagemBase64('');
        setImagemPreview('');
        return;
    }

    const maxSizeMB = 1;
    const maxSizeInBytes = maxSizeMB * 1024 * 1024;

    console.log("Tamanho do arquivo selecionado:", file.size, "bytes");
    console.log("Tamanho máximo permitido:", maxSizeInBytes, "bytes");

    const reader = new FileReader();
    reader.onload = (e) => {
        const img = new Image();
        img.src = e.target?.result as string;
        img.onload = () => {
            const canvas = document.createElement("canvas");
            const ctx = canvas.getContext("2d");

            if (!ctx) return;

            let quality = 0.7; // Começa com 70% de qualidade
            let width = img.width;
            let height = img.height;
            let compressedBase64 = "";

            const compressImage = () => {
                canvas.width = width;
                canvas.height = height;
                ctx.clearRect(0, 0, width, height);
                ctx.drawImage(img, 0, 0, width, height);

                compressedBase64 = canvas.toDataURL("image/jpeg", quality);
                const compressedSize = Math.ceil((compressedBase64.length * 3) / 4); // Aproximação do tamanho em bytes

                console.log("Tamanho após compressão:", compressedSize, "bytes");

                if (compressedSize > maxSizeInBytes) {
                    if (quality > 0.1) {
                        quality -= 0.1; // Reduz a qualidade
                        compressImage();
                    } else if (width > 200 && height > 200) {
                        width *= 0.9; // Reduz o tamanho da imagem
                        height *= 0.9;
                        compressImage();
                    } else {
                        setErroImagemTamanho(`Não foi possível reduzir a imagem para menos de ${maxSizeMB}MB.`);
                        setImagemBase64('');
                        setImagemPreview('');
                        event.target.value = '';
                        return;
                    }
                } else {
                    setImagemBase64(compressedBase64);
                    setImagemPreview(compressedBase64);
                }
            };

            compressImage();
        };
    };

    reader.readAsDataURL(file);
}
