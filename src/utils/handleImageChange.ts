export default function handleImagemChange(event: React.ChangeEvent<HTMLInputElement>, setErroImagemTamanho: (valor: string | null) => void, setImagemBase64: ((valor: string) => void), setImagemPreview: ((valor: string) => void)) {
    const file = event.target.files?.[0];
    setErroImagemTamanho(null); // Limpar qualquer erro anterior

    if (file) {
        const maxSizeMB = 1;
        const maxSizeInBytes = maxSizeMB * 1024 * 1024;

        // mensagem de erro aqui
        console.log("Tamanho do arquivo selecionado:", file.size, "bytes");
        console.log("Tamanho máximo permitido:", maxSizeInBytes, "bytes");

        if (file.size > maxSizeInBytes) {
            setErroImagemTamanho(`A imagem selecionada é maior que ${maxSizeMB}MB. Por favor, selecione uma imagem menor.`);
            setImagemBase64('');
            setImagemPreview('');
            const inputImagem = event.target as HTMLInputElement;
            inputImagem.value = '';
            return;
        }

        const reader = new FileReader();
        reader.onloadend = () => {
            const base64String = reader.result as string;
            setImagemBase64(base64String);
            setImagemPreview(base64String);
        };
        reader.readAsDataURL(file);
    } else {
        setImagemBase64('');
        setImagemPreview('');
    }
};