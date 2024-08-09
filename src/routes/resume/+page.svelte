<script>
    import { onMount } from "svelte";
    let PdfViewer;

    onMount(async () => {
        const module = await import("svelte-pdf");
        PdfViewer = module.default;
    });
    
    import MarcosSilva from '$lib/resume/Marcos_Silva.pdf';
</script>

<svelte:component this={PdfViewer} url={MarcosSilva}/>