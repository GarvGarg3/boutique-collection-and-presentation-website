'use client';

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import ImageUpload from "../../components/ImageUpload";

export default function Page() {
  const router = useRouter();
  const [uploadedImages, setUploadedImages] = useState<string[]>([]);

  const handleUpload = (url: string) => {
    setUploadedImages((prev) => [...prev, url]);
  };

  const handleRemove = () => {
    setUploadedImages([]);
  };

  return (
    <>
<header className="bg-[#fcf9f8]/80 dark:bg-[#171818]/80 backdrop-blur-xl shadow-[0_40px_40px_-15px_rgba(27,28,28,0.04)] fixed top-0 w-full z-50">
<div className="flex justify-between items-center h-20 px-8 w-full max-w-screen-2xl mx-auto">
<div className="flex items-center gap-4">
<button onClick={() => router.back()} className="hover:bg-[#f6f3f2] dark:hover:bg-[#2c2c2c] transition-colors p-2 rounded-full active:scale-95 duration-300">
<span className="material-symbols-outlined text-[#171818] dark:text-[#fcf9f8]">close</span>
</button>
</div>
<div className="font-headline text-2xl italic tracking-tighter text-[#171818]">L'Atelier</div>
<div className="flex items-center gap-6">
<span className="label-caps font-medium text-primary-container hidden md:block">Draft Saved 12:04</span>
<div className="w-10 h-10 rounded-full overflow-hidden bg-surface-container">
<img alt="Boutique Owner Profile" className="w-full h-full object-cover" data-alt="professional portrait of a creative director in a minimal studio setting with soft lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBP_-wE5QB2WSnBXc2Q8o9tgD-5wLX-lWIFLLUgHR9D4Pr7WaVA3p9xOefC4ruD5SkG-bOmknWOYe7-T5XAlB7_CnduDxXsHY0tl65nHH2aymbmIGQc1a7D63MYjWpki6khOHgWyXwm1jgt8nBF3VPIGh4TCBIQare4YKsyZWksk3W735M_YFKgZAAEUXMCvNYPqk9djGObaTUdSkoAjqIj6Clf5Y-2Mncl60gwIIyggl0bsMNJfmgdAy3i9oW51DcAWnQiChYag0E0"/>
</div>
</div>
</div>
</header>
<main className="pt-32 px-6 max-w-5xl mx-auto">

<div className="mb-12 text-center md:text-left">
<span className="label-caps text-secondary mb-2 block">Curation Process</span>
<h1 className="font-headline text-4xl md:text-5xl italic tracking-tight text-primary">Add New Design</h1>
</div>
<form className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

<div className="lg:col-span-7 space-y-8">
<ImageUpload
          onUpload={handleUpload}
          onRemove={handleRemove}
          existingImages={uploadedImages}
        />
<div className="grid grid-cols-3 gap-4">
<div className="aspect-square bg-surface-container-low rounded-lg flex items-center justify-center border border-outline-variant/20">
<span className="material-symbols-outlined text-outline">add</span>
</div>
<div className="aspect-square bg-surface-container-low rounded-lg flex items-center justify-center border border-outline-variant/20">
<span className="material-symbols-outlined text-outline">add</span>
</div>
<div className="aspect-square bg-surface-container-low rounded-lg flex items-center justify-center border border-outline-variant/20">
<span className="material-symbols-outlined text-outline">add</span>
</div>
</div>
</div>

<div className="lg:col-span-5 space-y-10">

<div className="p-6 bg-secondary-fixed/20 rounded-xl space-y-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "\'FILL\' 1" }}>auto_awesome</span>
<span className="label-caps font-bold text-on-secondary-fixed">Smart Organize</span>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input defaultChecked={true} className="sr-only peer" type="checkbox" value=""/>
<div className="w-11 h-6 bg-outline-variant peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-secondary"></div>
</label>
</div>
<p className="text-[11px] leading-relaxed text-on-secondary-fixed-variant">AI will analyze your visual assets and tags to automatically categorize this design within your <i>Library</i> or <i>Archive</i>.</p>
</div>
<div className="space-y-8">

<div className="group">
<label className="label-caps text-on-surface-variant block mb-2">Design Title</label>
<input className="w-full bg-transparent border-b border-outline-variant py-3 font-headline text-2xl italic focus:outline-none focus:border-secondary transition-colors placeholder:text-outline-variant/50" placeholder="e.g., Midnight Velvet Gala Gown" type="text"/>
</div>

<div className="group">
<label className="label-caps text-on-surface-variant block mb-2">Narrative &amp; Description</label>
<textarea className="w-full bg-surface-container-low rounded-lg p-4 text-sm focus:outline-none focus:bg-surface-container-high transition-colors resize-none border-none" placeholder="Describe the silhouette and intent..." rows={3}></textarea>
</div>

<div className="group">
<label className="label-caps text-on-surface-variant block mb-2">Material Specification</label>
<div className="flex flex-wrap gap-2 mb-3">
<span className="inline-flex items-center px-3 py-1 bg-surface-container-highest text-[11px] rounded-full text-primary font-medium">Mulberry Silk <button className="ml-2 text-outline">×</button></span>
<span className="inline-flex items-center px-3 py-1 bg-surface-container-highest text-[11px] rounded-full text-primary font-medium">Gold Thread <button className="ml-2 text-outline">×</button></span>
</div>
<div className="relative">
<input className="w-full bg-transparent border-b border-outline-variant py-2 text-sm focus:outline-none focus:border-secondary transition-colors" placeholder="Add material detail..." type="text"/>
<span className="material-symbols-outlined absolute right-0 bottom-2 text-outline text-lg">texture</span>
</div>
</div>

<div className="group">
<label className="label-caps text-on-surface-variant block mb-2">Tags</label>
<div className="flex flex-wrap gap-2">
<button className="px-4 py-1.5 border border-outline-variant rounded-full text-[10px] uppercase tracking-wider hover:bg-primary hover:text-white transition-all" type="button">#Autumn24</button>
<button className="px-4 py-1.5 border border-outline-variant rounded-full text-[10px] uppercase tracking-wider hover:bg-primary hover:text-white transition-all" type="button">#EveningWear</button>
<button className="px-4 py-1.5 border border-outline-variant rounded-full text-[10px] uppercase tracking-wider hover:bg-primary hover:text-white transition-all" type="button">#Couture</button>
<Link href="/add"><button className="px-3 py-1.5 bg-surface-container rounded-full text-[10px] hover:bg-secondary-fixed transition-all" type="button"><span className="material-symbols-outlined text-sm leading-none">add</span></button></Link>
</div>
</div>
</div>

<div className="pt-6">
<button className="w-full bg-primary text-on-primary py-5 rounded-xl font-medium tracking-widest uppercase text-xs flex items-center justify-center gap-3 hover:bg-primary-container transition-all shadow-xl shadow-primary/10 active:scale-[0.98]">
                        Complete Entry
                        <span className="material-symbols-outlined text-sm">arrow_forward</span>
</button>
<p className="text-center mt-6 text-[10px] text-outline tracking-tighter uppercase">This action will sync across your Atelier network</p>
</div>
</div>
</form>
</main>

<nav className="bg-[#fcf9f8]/90 dark:bg-[#171818]/90 backdrop-blur-2xl fixed bottom-0 left-0 w-full flex justify-around items-center px-4 pt-4 pb-8 z-50 rounded-t-[32px] shadow-[0_-10px_40px_rgba(0,0,0,0.03)] md:hidden">
<div className="flex flex-col items-center justify-center text-[#c4c7c7] px-6 py-2 hover:opacity-80 transition-opacity active:scale-90">
<span className="material-symbols-outlined">dashboard</span>
<span className="font-sans text-[10px] font-medium tracking-widest uppercase mt-1">Atelier</span>
</div>
<div className="flex flex-col items-center justify-center text-[#171818] bg-[#f6f3f2] rounded-full px-6 py-2 transition-all active:scale-90">
<span className="material-symbols-outlined" style={{ fontVariationSettings: "\'FILL\' 1" }}>folder_open</span>
<span className="font-sans text-[10px] font-medium tracking-widest uppercase mt-1">Library</span>
</div>
<div className="flex flex-col items-center justify-center text-[#c4c7c7] px-6 py-2 hover:opacity-80 transition-opacity active:scale-90">
<span className="material-symbols-outlined">auto_awesome_motion</span>
<span className="font-sans text-[10px] font-medium tracking-widest uppercase mt-1">Archive</span>
</div>
<div className="flex flex-col items-center justify-center text-[#c4c7c7] px-6 py-2 hover:opacity-80 transition-opacity active:scale-90">
<span className="material-symbols-outlined">visibility</span>
<span className="font-sans text-[10px] font-medium tracking-widest uppercase mt-1">Present</span>
</div>
</nav>

    </>
  );
}
