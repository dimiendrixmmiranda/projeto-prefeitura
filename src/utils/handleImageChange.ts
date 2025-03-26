export default function handleImagemChange(
    event: React.ChangeEvent<HTMLInputElement>,
    setErroImagemTamanho: (valor: string | null) => void,
    setImagemBase64: (valor: string) => void,
    setImagemPreview: (valor: string) => void
) {
    const file = event.target.files?.[0];
    setErroImagemTamanho(null); // Limpar qualquer erro anterior

    if (file) {
        const maxSizeMB = 1;
        const maxSizeInBytes = maxSizeMB * 1024 * 1024;

        console.log("Tamanho do arquivo selecionado:", file.size, "bytes");
        console.log("Tamanho máximo permitido:", maxSizeInBytes, "bytes");

        if (file.size > maxSizeInBytes) {
            setErroImagemTamanho(`A imagem selecionada é maior que ${maxSizeMB}MB. Por favor, selecione uma imagem menor.`);
            setImagemBase64('');
            setImagemPreview('');
            event.target.value = '';
            return;
        }

        const reader = new FileReader();
        reader.onload = (e) => {
            const img = new Image();
            img.src = e.target?.result as string;
            img.onload = () => {
                const canvas = document.createElement("canvas");
                const ctx = canvas.getContext("2d");

                if (!ctx) return;

                const maxWidth = 800; // Define a largura máxima
                const scaleSize = maxWidth / img.width;
                canvas.width = maxWidth;
                canvas.height = img.height * scaleSize;

                ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

                // Comprimir a imagem e converter para base64
                const compressedBase64 = canvas.toDataURL("image/jpeg", 0.7); // Qualidade 70%

                setImagemBase64(compressedBase64);
                setImagemPreview(compressedBase64);
            };
        };
        reader.readAsDataURL(file);
    } else {
        setImagemBase64('');
        setImagemPreview('');
    }
}
