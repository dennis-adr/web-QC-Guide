import React, { useState } from 'react';
import { ChevronDown, ChevronUp, FileText, CheckCircle, List, AlertTriangle, Clock, Tag, Download, ArrowRight, PlayCircle, Bug, FileSpreadsheet, AlertCircle, Upload, RefreshCw, Link, Image as ImageIcon, Info, Eye, X, ZoomIn } from 'lucide-react';

interface GuideSectionItem {
  id: string;
  title: string;
  icon: React.ReactNode;
  content: React.ReactNode;
  textContent: string; // Added for full-text search
}

export const UserGuide: React.FC = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>('intro');
  const [showScriptModal, setShowScriptModal] = useState(false);
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const toggleSection = (id: string) => {
    setExpandedSection(expandedSection === id ? null : id);
  };

  const scrollToSection = (id: string) => {
    setExpandedSection(id);
    // Small timeout to allow state to update and accordion to open
    setTimeout(() => {
        const element = document.getElementById(`section-${id}`);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }, 100);
  };

  const sections: GuideSectionItem[] = [
    {
      id: 'intro',
      title: 'Persiapan',
      icon: <FileSpreadsheet className="w-5 h-5 text-blue-500" />,
      content: (
        <div className="space-y-6">
          <p className="text-slate-600 leading-relaxed">
            <strong>User Acceptance Testing (UAT)</strong> dilakukan secara mandiri oleh User untuk memvalidasi apakah fitur sudah berjalan sesuai kebutuhan bisnis sebelum aplikasi diluncurkan.
            Dokumen ini adalah panduan resmi bagi User untuk menjalankan proses tersebut.
          </p>
          
          {/* FLOWCHART VISUALIZATION */}
          <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 shadow-sm">
            <h4 className="font-bold text-slate-900 mb-6 text-center uppercase tracking-wider text-xs">Alur Kerja Pengujian (Workflow)</h4>
            
            <div className="flex flex-col md:flex-row items-center justify-between relative gap-6 md:gap-0">
                {/* Connector Line (Desktop Only) */}
                <div className="hidden md:block absolute top-[24px] left-0 right-0 h-0.5 bg-slate-200 z-0 mx-10"></div>

                {/* Step 1 */}
                <div className="flex flex-col items-center text-center z-10 w-full md:w-32 group">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-3 shadow-sm border-2 border-white group-hover:scale-110 transition-transform">
                        <FileText className="w-5 h-5 text-blue-600" />
                    </div>
                    <div className="bg-white px-2 rounded">
                        <p className="text-xs font-bold text-slate-800">Persiapan Skrip</p>
                        <p className="text-[10px] text-slate-500 mt-1">Excel QC / User</p>
                    </div>
                </div>

                {/* Arrow Mobile */}
                <div className="md:hidden text-slate-300"><ArrowDown className="w-5 h-5" /></div>

                {/* Step 2 */}
                <div className="flex flex-col items-center text-center z-10 w-full md:w-32 group">
                    <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center mb-3 shadow-sm border-2 border-white group-hover:scale-110 transition-transform">
                        <PlayCircle className="w-5 h-5 text-indigo-600" />
                    </div>
                     <div className="bg-white px-2 rounded">
                        <p className="text-xs font-bold text-slate-800">Eksekusi</p>
                        <p className="text-[10px] text-slate-500 mt-1">Sesuai Step</p>
                    </div>
                </div>

                 {/* Arrow Mobile */}
                <div className="md:hidden text-slate-300"><ArrowDown className="w-5 h-5" /></div>

                {/* Step 3 */}
                <div className="flex flex-col items-center text-center z-10 w-full md:w-32 group">
                    <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center mb-3 shadow-sm border-2 border-white group-hover:scale-110 transition-transform">
                        <FileSpreadsheet className="w-5 h-5 text-emerald-600" />
                    </div>
                     <div className="bg-white px-2 rounded">
                        <p className="text-xs font-bold text-slate-800">Update Status</p>
                        <p className="text-[10px] text-slate-500 mt-1">Pass / Fail</p>
                    </div>
                </div>

                 {/* Arrow Mobile */}
                <div className="md:hidden text-slate-300"><ArrowDown className="w-5 h-5" /></div>

                {/* Step 4 */}
                <div className="flex flex-col items-center text-center z-10 w-full md:w-32 group">
                    <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mb-3 shadow-sm border-2 border-white group-hover:scale-110 transition-transform">
                        <Bug className="w-5 h-5 text-red-600" />
                    </div>
                     <div className="bg-white px-2 rounded">
                        <p className="text-xs font-bold text-slate-800">Lapor Bug</p>
                        <p className="text-[10px] text-slate-500 mt-1">Via Monday (If Fail)</p>
                    </div>
                </div>

                 {/* Arrow Mobile */}
                <div className="md:hidden text-slate-300"><ArrowDown className="w-5 h-5" /></div>

                {/* Step 5 */}
                <div className="flex flex-col items-center text-center z-10 w-full md:w-32 group">
                    <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center mb-3 shadow-sm border-2 border-white group-hover:scale-110 transition-transform">
                        <RefreshCw className="w-5 h-5 text-orange-600" />
                    </div>
                     <div className="bg-white px-2 rounded">
                        <p className="text-xs font-bold text-slate-800">Re-test</p>
                        <p className="text-[10px] text-slate-500 mt-1">Status: Testing User</p>
                    </div>
                </div>
                
            </div>
          </div>
        </div>
      ),
      textContent: "User Acceptance Testing (UAT) dilakukan secara mandiri oleh User untuk memvalidasi apakah fitur sudah berjalan sesuai kebutuhan bisnis sebelum aplikasi diluncurkan. Dokumen ini adalah panduan resmi bagi User untuk menjalankan proses tersebut. Alur Kerja Pengujian: Persiapan Skrip (Excel dari QC atau User sendiri), Eksekusi Testing sesuai Step, Update Status di File Excel (Pass/Fail), Pelaporan Bug di Monday.com (jika Fail), Re-test setelah status 'Testing User'"
    },
    {
      id: 'execution',
      title: 'Pelaksanaan Testing',
      icon: <CheckCircle className="w-5 h-5 text-green-500" />,
      content: (
        <div className="space-y-6 text-sm text-slate-700">
           {/* FLOWCHART UAT EXECUTION */}
           <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 mb-6 overflow-x-auto">
            <h5 className="font-bold text-slate-800 mb-4 text-xs uppercase tracking-wider text-center sticky left-0">Flowchart Eksekusi UAT</h5>
            <div className="flex flex-row items-center justify-between min-w-[600px] gap-4 pb-2">
                
                {/* Flow Node 1 */}
                <div className="flex flex-col items-center text-center w-24">
                   <div className="w-10 h-10 rounded-full bg-white border-2 border-slate-200 flex items-center justify-center mb-2 shadow-sm">
                       <FileText className="w-5 h-5 text-slate-600" />
                   </div>
                   <p className="font-bold text-xs text-slate-700">1. Data Awal</p>
                   <p className="text-[10px] text-slate-500">Isi Nama/Tgl</p>
                </div>

                <div className="h-0.5 w-8 bg-slate-300"></div>

                {/* Flow Node 2 */}
                <div className="flex flex-col items-center text-center w-24">
                   <div className="w-10 h-10 rounded-full bg-white border-2 border-indigo-200 flex items-center justify-center mb-2 shadow-sm">
                       <PlayCircle className="w-5 h-5 text-indigo-600" />
                   </div>
                   <p className="font-bold text-xs text-slate-700">2. Testing</p>
                   <p className="text-[10px] text-slate-500">Sesuai Step</p>
                </div>

                <div className="h-0.5 w-8 bg-slate-300"></div>

                {/* Flow Node 3 */}
                <div className="flex flex-col items-center text-center w-24">
                   <div className="w-10 h-10 rounded-full bg-white border-2 border-blue-200 flex items-center justify-center mb-2 shadow-sm">
                       <CheckCircle className="w-5 h-5 text-blue-600" />
                   </div>
                   <p className="font-bold text-xs text-slate-700">3. Validasi</p>
                   <p className="text-[10px] text-slate-500">Act vs Exp</p>
                </div>

                <div className="h-0.5 w-8 bg-slate-300"></div>

                 {/* Flow Node 4 */}
                 <div className="flex flex-col items-center text-center w-24">
                   <div className="w-10 h-10 rounded-full bg-white border-2 border-emerald-200 flex items-center justify-center mb-2 shadow-sm">
                       <Tag className="w-5 h-5 text-emerald-600" />
                   </div>
                   <p className="font-bold text-xs text-slate-700">4. Status</p>
                   <p className="text-[10px] text-slate-500">Pass/Fail</p>
                </div>

                <div className="h-0.5 w-8 bg-slate-300"></div>

                {/* Flow Node 5 */}
                <div className="flex flex-col items-center text-center w-24">
                   <div className="w-10 h-10 rounded-full bg-white border-2 border-purple-200 flex items-center justify-center mb-2 shadow-sm">
                       <Link className="w-5 h-5 text-purple-600" />
                   </div>
                   <p className="font-bold text-xs text-slate-700">5. Evidence</p>
                   <p className="text-[10px] text-slate-500">SharePoint</p>
                </div>

            </div>
          </div>

          <div className="bg-white p-5 rounded-lg border border-slate-200 shadow-sm">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 border-b pb-2 gap-2">
                <h4 className="font-bold text-slate-800">Langkah Pelaksanaan UAT</h4>
                {/* Trigger Modal Button */}
                <button 
                  onClick={() => setShowScriptModal(true)}
                  className="inline-flex items-center px-3 py-1.5 bg-green-50 text-green-700 text-xs font-bold rounded-lg hover:bg-green-100 transition-colors border border-green-200"
                >
                    <Eye className="w-3 h-3 mr-1.5" />
                    Lihat Contoh Naskah
                </button>
            </div>
            
            <ol className="list-decimal list-inside space-y-3 text-slate-700">
              <li className="pl-2">
                <strong>Persiapan Data:</strong> Isi data pada file UAT (Nama Tester, Tanggal Test, Status Awal TC).
              </li>
              <li className="pl-2">
                <strong>Proses Testing:</strong> Lakukan testing sesuai <strong>Step-by-Step</strong> yang tertera pada file UAT. Jangan melompat langkah.
              </li>
              <li className="pl-2">
                <strong>Validasi Hasil:</strong> Cermati kolom <em>Expected Result</em>. Bandingkan dengan <em>Actual Result</em> (apa yang terjadi di aplikasi).
              </li>
              <li className="pl-2">
                <strong>Penentuan Status:</strong>
                <ul className="list-disc list-inside mt-1 ml-4 text-xs space-y-1">
                    <li className="text-green-700 font-medium">PASS: Actual sesuai Expected.</li>
                    <li className="text-red-700 font-medium">FAIL: Actual BEDA dengan Expected.</li>
                </ul>
              </li>
              <li className="pl-2">
                <strong>Dokumentasi Evidence:</strong>
                <div className="mt-1 ml-4 p-2 bg-slate-50 border border-slate-200 rounded text-xs text-slate-700">
                    <div className="flex items-center font-bold mb-1">
                        <Link className="w-3 h-3 mr-1" /> Wajib via SharePoint
                    </div>
                    Upload foto/video ke <strong>SharePoint</strong>. Copy link-nya dan paste ke kolom Evidence di Excel/Monday.
                    <br/><span className="italic text-slate-500">Jangan menempel gambar langsung di dalam cell Excel.</span>
                 </div>
              </li>
            </ol>
          </div>

          {/* DETAIL LOGIC VISUALS (Same as QC Guide) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-green-200 bg-green-50 rounded-lg p-4">
              <div className="font-bold text-green-800 mb-2 flex items-center">
                <CheckCircle className="w-4 h-4 mr-2" />
                Skenario PASS
              </div>
              <p className="text-green-700 mb-2 text-xs">Jika <strong>Actual Result == Expected Result</strong></p>
              <ul className="list-decimal list-inside text-green-800 space-y-1 text-xs font-medium">
                <li>Ubah <strong>First Status</strong> &rarr; PASS</li>
                <li>Ubah <strong>Second Status</strong> &rarr; PASS</li>
                <li>Kosongkan kolom Date Retest.</li>
              </ul>
            </div>

            <div className="border border-red-200 bg-red-50 rounded-lg p-4">
              <div className="font-bold text-red-800 mb-2 flex items-center">
                <AlertTriangle className="w-4 h-4 mr-2" />
                Skenario FAIL
              </div>
              <p className="text-red-700 mb-2 text-xs">Jika <strong>Actual Result != Expected Result</strong></p>
              <ul className="list-decimal list-inside text-red-800 space-y-1 text-xs font-medium">
                <li>Ubah <strong>First Status</strong> &rarr; FAIL</li>
                <li>Lapor Bug di Monday.</li>
                <li>Tunggu status 'Ready to Test'.</li>
                <li>Lakukan Retest.</li>
              </ul>
            </div>
          </div>

          <div className="bg-slate-100 p-4 rounded-lg border border-slate-200">
            <h4 className="font-bold text-slate-800 mb-2 text-sm">Proses Retest (Pengujian Ulang)</h4>
            <div className="space-y-2 text-xs">
              <div className="flex items-start">
                <span className="bg-slate-800 text-white px-2 py-0.5 rounded mr-2 mt-0.5 font-mono text-[10px]">IF FIXED</span>
                <p>Ubah <strong>Last Status</strong> &rarr; PASS. <br/> Update Monday &rarr; CLOSED + Komen: <code>[CLOSED] DD/MM/YYYY - Evidence</code></p>
              </div>
              <div className="flex items-start">
                <span className="bg-red-600 text-white px-2 py-0.5 rounded mr-2 mt-0.5 font-mono text-[10px]">IF NOT</span>
                <p>Ubah status Monday &rarr; REOPEN. Ulangi siklus.</p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-100 text-yellow-800 text-xs">
            <strong>Catatan Penting:</strong> Isi kolom <em>Date Test</em> dan tulis hasil testing pada kolom <em>Actual Result</em> dengan jelas.
          </div>
        </div>
      ),
      textContent: "Eksekusi & Pengisian Skrip. Persiapan Data: Isi data pada file UAT (Nama Tester, Tanggal Test, Status Awal TC). Proses Testing: Lakukan testing sesuai Step-by-Step yang tertera pada file SIT/UAT. Jangan melompat langkah. Validasi Hasil: Cermati kolom Expected Result. Bandingkan dengan Actual Result (apa yang terjadi di aplikasi). Penentuan Status: PASS (Actual sesuai Expected), FAIL (Actual BEDA dengan Expected). Catatan Penting: Isi kolom Date Test dan tulis hasil testing pada kolom Actual Result dengan jelas."
    },
    {
      id: 'bug-reporting',
      title: 'Pelaporan Bug',
      icon: <AlertCircle className="w-5 h-5 text-red-500" />,
      content: (
        <div className="space-y-8">
          {/* Section 1: Langkah Pelaporan (Unified without Numbers) */}
          <div>
            <h4 className="font-bold text-slate-900 text-lg mb-4 border-l-4 border-red-500 pl-3">Standar Pelaporan di Monday.com</h4>
            
            <div className="space-y-8">
              
              {/* BLOCK 1: Header & Fields */}
              <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 shadow-sm">
                 <h5 className="font-bold text-slate-800 mb-3 text-sm flex items-center">
                    <FileText className="w-4 h-4 mr-2 text-blue-600" />
                    Format Header & Kolom Wajib
                 </h5>
                 
                 {/* Format Judul */}
                 <div className="mb-4">
                     <code className="block bg-slate-800 text-yellow-400 p-3 rounded font-mono text-sm shadow-inner mb-2">
                       [BUGXXX]-[TCXX]-Modul-Deskripsi Bug
                     </code>
                     <p className="text-xs text-slate-500">Contoh: <code>[BUG010]-[TC05]-Login-Tidak bisa masuk dengan email valid</code></p>
                 </div>
                 
                 {/* Image Placeholder */}
                 <div className="w-full bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm mb-4">
                     {/* Container relative without fixed aspect ratio, using min-h to prevent collapse */}
                     <div className="relative w-full bg-slate-100 min-h-[100px] flex items-center justify-center">
                        <img 
                            src="/monday-card-header.png" 
                            alt="Screenshot Header Monday Card" 
                            className="w-full h-auto object-contain"
                            onError={(e) => {
                                e.currentTarget.style.display = 'none';
                                e.currentTarget.parentElement?.classList.remove('bg-white');
                            }}
                        />
                        {/* Placeholder text if image fails */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-400 pointer-events-none" style={{display: 'var(--display-placeholder, flex)'}}>
                             {/* <ImageIcon className="w-8 h-8 mb-2 opacity-50" /> */}
                             {/* <span className="text-xs">Preview Header (Simpan file: public/monday-card-header.png)</span> */}
                        </div>
                     </div>
                 </div>

                 {/* Kolom Wajib Grid */}
                 <div className="bg-white p-4 rounded-lg border border-slate-200">
                     <ul className="space-y-3 text-sm">
                       <li className="grid grid-cols-1 sm:grid-cols-[120px_1fr] gap-1 sm:gap-4 border-b border-slate-100 pb-2">
                           <span className="font-bold text-slate-700">Test By:</span> 
                           <span className="text-slate-600">Pilih Akun Anda</span>
                       </li>
                       <li className="grid grid-cols-1 sm:grid-cols-[120px_1fr] gap-1 sm:gap-4 border-b border-slate-100 pb-2">
                           <span className="font-bold text-slate-700">Assigned To:</span> 
                           <span className="text-slate-600">Pilih <span className="font-bold text-blue-700">SA / PA / BSA</span> terkait</span>
                       </li>
                       <li className="grid grid-cols-1 sm:grid-cols-[120px_1fr] gap-1 sm:gap-4">
                           <span className="font-bold text-slate-700">Developer:</span> 
                           <span className="text-slate-400 italic">Biarkan Kosong (Akan diisi SA)</span>
                       </li>
                     </ul>
                 </div>
                 
                 {/* Role Legend */}
                 <div className="mt-3 flex items-start text-[10px] text-slate-500 bg-blue-50/50 p-2 rounded">
                    <Info className="w-3 h-3 mr-1 mt-0.5 flex-shrink-0" />
                    <p>
                        <strong>SA</strong> (System Analyst), 
                        <strong> PA</strong> (Product Analyst), 
                        <strong> BSA</strong> (Business System Analyst).
                    </p>
                 </div>
              </div>

              {/* BLOCK 2: Comment Section */}
              <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 shadow-sm">
                 <h5 className="font-bold text-slate-800 mb-3 text-sm flex items-center">
                    <List className="w-4 h-4 mr-2 text-blue-600" />
                    Isi Comment / Deskripsi Bug
                 </h5>

                 {/* Compact Image Trigger (Replaces Large Image) */}
                 <button
                    onClick={() => setPreviewImage('/monday-comment-section.png')}
                    className="w-full flex items-center justify-between p-4 bg-white border border-slate-200 rounded-lg shadow-sm hover:bg-slate-50 hover:border-blue-300 transition-all group mb-4"
                 >
                    <div className="flex items-center gap-3">
                        <div className="bg-blue-50 p-2 rounded-md group-hover:bg-blue-100 transition-colors">
                            <ImageIcon className="w-5 h-5 text-blue-600" />
                        </div>
                        <div className="text-left">
                            <span className="block font-semibold text-slate-700 text-sm group-hover:text-blue-700">
                                Lihat Contoh Screenshot Comment
                            </span>
                            <span className="block text-[10px] text-slate-500">
                                Klik untuk melihat format deskripsi bug
                            </span>
                        </div>
                    </div>
                    <div className="bg-slate-100 px-2 py-1 rounded text-[10px] font-medium text-slate-600 flex items-center group-hover:bg-blue-100 group-hover:text-blue-700">
                        <ZoomIn className="w-3 h-3 mr-1" />
                        Preview
                    </div>
                 </button>

                 {/* Structure Description */}
                 <div className="bg-blue-50/50 p-4 rounded-lg border border-blue-100">
                    <p className="text-xs font-bold text-blue-800 mb-2 uppercase tracking-wide">Structure Penjelasan:</p>
                    <ul className="space-y-2 text-sm text-slate-700">
                        <li className="flex gap-2"><span className="font-bold text-slate-900 min-w-[70px]">Step:</span> <span>Jelaskan langkah untuk mereproduksi bug secara urut.</span></li>
                        <li className="flex gap-2"><span className="font-bold text-slate-900 min-w-[70px]">Issue:</span> <span>Apa masalah yang terjadi?</span></li>
                        <li className="flex gap-2"><span className="font-bold text-slate-900 min-w-[70px]">Expected:</span> <span>Seharusnya sistem berjalan bagaimana?</span></li>
                        <li className="flex gap-2"><span className="font-bold text-slate-900 min-w-[70px]">Actual:</span> <span>Apa yang sebenarnya terjadi?</span></li>
                        <li className="flex gap-2"><span className="font-bold text-slate-900 min-w-[70px]">Evidence:</span> <span className="text-red-600 font-medium">Link SharePoint</span> (Wajib Foto/Video).</li>
                    </ul>
                 </div>
              </div>

            </div>
          </div>

          {/* Section 2: Klasifikasi Severity */}
          <div>
            <h4 className="font-bold text-slate-900 text-lg mb-4 flex items-center border-l-4 border-orange-500 pl-3">
              <AlertTriangle className="w-5 h-5 mr-2 text-orange-500" />
              Klasifikasi Severity (Dampak Bug)
            </h4>
            <div className="overflow-x-auto rounded-lg border border-slate-200">
              <table className="min-w-full divide-y divide-slate-200 text-sm">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="px-4 py-3 text-left font-bold text-slate-700 w-1/6">Level</th>
                    <th className="px-4 py-3 text-left font-bold text-slate-700 w-1/3">Definisi</th>
                    <th className="px-4 py-3 text-left font-bold text-slate-700">Contoh Kasus</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-slate-200">
                  <tr>
                    <td className="px-4 py-3 font-bold text-red-600 bg-red-50 align-top">MAJOR</td>
                    <td className="px-4 py-3 align-top">Bug <strong>Stopper</strong>. Flow utama tidak bisa dilanjutkan sama sekali.</td>
                    <td className="px-4 py-3 align-top text-slate-600">
                        <ul className="list-disc list-inside text-xs space-y-1">
                            <li>Login gagal dengan data valid.</li>
                            <li>Tombol "Submit/Bayar" tidak berfungsi.</li>
                            <li>Aplikasi Force Close (Crash) saat dibuka.</li>
                        </ul>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-bold text-orange-600 align-top">MEDIUM</td>
                    <td className="px-4 py-3 align-top">Fitur terganggu tapi masih ada jalan alternatif (workaround), atau terjadi di fitur yang tidak kritis.</td>
                    <td className="px-4 py-3 align-top text-slate-600">
                        <ul className="list-disc list-inside text-xs space-y-1">
                            <li>Ganti Foto Profil gagal (Fitur sekunder).</li>
                            <li>Filter tanggal tidak akurat, tapi bisa scroll manual.</li>
                            <li>Search result lambat munculnya.</li>
                        </ul>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-bold text-yellow-600 align-top">MINOR</td>
                    <td className="px-4 py-3 align-top">Bug kecil yang tidak terlalu mengganggu flow.</td>
                    <td className="px-4 py-3 align-top text-slate-600">
                         <ul className="list-disc list-inside text-xs space-y-1">
                            <li>Typo pada pesan error/label.</li>
                            <li>Tooltip tidak muncul saat di-hover.</li>
                            <li>Urutan tab keyboard tidak runut.</li>
                        </ul>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-bold text-pink-600 align-top">KOSMETIK</td>
                    <td className="px-4 py-3 align-top">Bug yang mencakup visual saja, bukan secara fungsi.</td>
                    <td className="px-4 py-3 align-top text-slate-600">
                        <ul className="list-disc list-inside text-xs space-y-1">
                            <li>Warna tombol beda gradasi dengan desain.</li>
                            <li>Logo terlihat gepeng/stretch.</li>
                            <li>Padding/Margin antar elemen tidak konsisten.</li>
                        </ul>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-bold text-slate-500 align-top">NOT BUG</td>
                    <td className="px-4 py-3 align-top">Card dinyatakan bukan bug.</td>
                    <td className="px-4 py-3 align-top text-slate-600">
                         <ul className="list-disc list-inside text-xs space-y-1">
                            <li>Request fitur baru (diluar scope).</li>
                            <li>User salah input data (Human Error).</li>
                            <li>Data kosong karena memang belum diinput di DB.</li>
                        </ul>
                    </td>
                  </tr>
                  <tr>
                     <td className="px-4 py-3 font-bold text-blue-600 align-top">NICE TO HAVE</td>
                     <td className="px-4 py-3 align-top">Bersifat opsional.</td>
                     <td className="px-4 py-3 align-top text-slate-600 text-xs">
                         Penambahan animasi loading agar lebih menarik, atau fitur Dark Mode.
                     </td>
                  </tr>
                  <tr>
                     <td className="px-4 py-3 font-bold text-purple-600 align-top">MUST TO HAVE</td>
                     <td className="px-4 py-3 align-top">Wajib diperbaiki.</td>
                     <td className="px-4 py-3 align-top text-slate-600 text-xs">
                         Validasi No HP minimal 10 digit yang terlewat (Requirement dasar).
                     </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Section 3: Priority (Table Format) */}
          <div>
            <h4 className="font-bold text-slate-900 text-lg mb-4 flex items-center border-l-4 border-blue-500 pl-3">
               <Clock className="w-5 h-5 mr-2 text-blue-500" />
               Priority (Prioritas Pengerjaan)
            </h4>
            <div className="overflow-x-auto rounded-lg border border-slate-200">
              <table className="min-w-full divide-y divide-slate-200 text-sm">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="px-4 py-3 text-left font-bold text-slate-700">Level</th>
                    <th className="px-4 py-3 text-left font-bold text-slate-700">Definisi</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-slate-200">
                  <tr>
                    <td className="px-4 py-3 font-bold text-red-700 bg-red-50">HIGH</td>
                    <td className="px-4 py-3">Prioritas tinggi, diutamakan untuk dikerjakan terlebih dahulu.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-bold text-orange-700 bg-orange-50">MEDIUM</td>
                    <td className="px-4 py-3">Prioritas menengah, dapat dikerjakan setelah bug High.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-bold text-blue-700 bg-blue-50">LOW</td>
                    <td className="px-4 py-3">Prioritas terakhir, dapat dikerjakan setelah Medium dan High.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Section 4: Status Workflow Table (Unified with Merged Headers) */}
          <div>
             <h4 className="font-bold text-slate-900 text-lg mb-4 flex items-center border-l-4 border-purple-500 pl-3">
               <Tag className="w-5 h-5 text-purple-500 mr-2" />
               Status & Workflow (Referensi Lengkap)
             </h4>
             <div className="overflow-x-auto rounded-lg border border-slate-200">
               <table className="min-w-full divide-y divide-slate-200 text-sm">
                 <thead className="bg-slate-50">
                    <tr>
                      <th className="px-4 py-3 text-left font-bold text-slate-700 w-1/3">Status</th>
                      <th className="px-4 py-3 text-left font-bold text-slate-700">Keterangan / Kondisi</th>
                    </tr>
                 </thead>
                 <tbody className="bg-white divide-y divide-slate-200">
                    {/* Category 1 */}
                    <tr className="bg-slate-100">
                        <td colSpan={2} className="px-4 py-2 text-xs font-bold text-slate-500 uppercase tracking-wider">
                            1. Workflow Utama (Pengerjaan)
                        </td>
                    </tr>
                    <tr>
                       <td className="px-4 py-3 font-bold text-slate-600 bg-slate-50/50">OPEN</td>
                       <td className="px-4 py-3">Bug baru saja dilaporkan, belum dikerjakan developer.</td>
                    </tr>
                    <tr>
                       <td className="px-4 py-3 font-bold text-blue-600 bg-blue-50/50">IN PROGRESS</td>
                       <td className="px-4 py-3">Sedang diperbaiki developer.</td>
                    </tr>
                    <tr>
                       <td className="px-4 py-3 font-bold text-yellow-600 bg-yellow-50/50">REOPEN</td>
                       <td className="px-4 py-3">Muncul lagi setelah diperbaiki.</td>
                    </tr>
                    <tr>
                       <td className="px-4 py-3 font-bold text-green-600 bg-green-50/50">CLOSED</td>
                       <td className="px-4 py-3">Sudah clear/fixed.</td>
                    </tr>

                    {/* Category 2 */}
                    <tr className="bg-slate-100">
                        <td colSpan={2} className="px-4 py-2 text-xs font-bold text-slate-500 uppercase tracking-wider">
                            2. Fase Pengujian (Testing)
                        </td>
                    </tr>
                    <tr>
                       <td className="px-4 py-3 font-bold text-indigo-600 bg-indigo-50/50">TESTING QC</td>
                       <td className="px-4 py-3">Dev sudah fix, QC sedang cek.</td>
                    </tr>
                    <tr>
                       <td className="px-4 py-3 font-bold text-teal-600 bg-teal-50/50">TESTING USER</td>
                       <td className="px-4 py-3">QC sudah ACC, giliran User cek.</td>
                    </tr>
                    <tr>
                       <td className="px-4 py-3 font-bold text-purple-600 bg-purple-50/50">TESTING VENDOR</td>
                       <td className="px-4 py-3">Pengecekan pihak ketiga.</td>
                    </tr>

                    {/* Category 3 */}
                    <tr className="bg-slate-100">
                        <td colSpan={2} className="px-4 py-2 text-xs font-bold text-slate-500 uppercase tracking-wider">
                            3. Status Teknis (Server)
                        </td>
                    </tr>
                    <tr>
                       <td className="px-4 py-3 font-mono text-xs font-bold text-slate-700 bg-slate-50">MERGE TO DEV</td>
                       <td className="px-4 py-3">Kode sedang digabungkan ke server Development.</td>
                    </tr>
                    <tr>
                       <td className="px-4 py-3 font-mono text-xs font-bold text-slate-700 bg-slate-50">DONE DEV</td>
                       <td className="px-4 py-3">Sudah update di server Development.</td>
                    </tr>
                    <tr>
                       <td className="px-4 py-3 font-mono text-xs font-bold text-slate-700 bg-slate-50">MERGE TO STG</td>
                       <td className="px-4 py-3">Kode sedang digabungkan ke server Staging.</td>
                    </tr>
                    <tr>
                       <td className="px-4 py-3 font-mono text-xs font-bold text-slate-700 bg-slate-50">DONE STG</td>
                       <td className="px-4 py-3">Sudah update di server Staging.</td>
                    </tr>

                    {/* Category 4 */}
                    <tr className="bg-slate-100">
                        <td colSpan={2} className="px-4 py-2 text-xs font-bold text-slate-500 uppercase tracking-wider">
                            4. Penundaan & Validasi
                        </td>
                    </tr>
                    <tr>
                       <td className="px-4 py-3 font-bold text-orange-600 bg-orange-50/50">PENDING</td>
                       <td className="px-4 py-3">Tertunda menunggu info tambahan.</td>
                    </tr>
                    <tr>
                       <td className="px-4 py-3 font-bold text-slate-500 bg-slate-50/50">HOLD</td>
                       <td className="px-4 py-3">Sengaja ditahan/di-pause (biasanya prioritas rendah).</td>
                    </tr>
                    <tr>
                       <td className="px-4 py-3 font-bold text-red-600 bg-red-50/50">REJECT</td>
                       <td className="px-4 py-3">Ditolak. Alasannya: Bukan bug (memang fitur begitu) atau tidak akan diperbaiki.</td>
                    </tr>
                    <tr>
                       <td className="px-4 py-3 font-bold text-purple-600 bg-purple-50/50">DUPLICATE</td>
                       <td className="px-4 py-3">Bug sama sudah ada di card lain.</td>
                    </tr>
                    <tr>
                       <td className="px-4 py-3 font-bold text-teal-600 bg-teal-50/50">NEED CONFIRM</td>
                       <td className="px-4 py-3">Butuh konfirmasi lanjut.</td>
                    </tr>
                 </tbody>
               </table>
             </div>
          </div>
        </div>
      ),
      textContent: "Pelaporan Bug (Detail). Langkah Pelaporan di Monday.com. Format Judul Wajib: [BUGXXX] - [Modul] - [Judul Bug]. Kolom Wajib Diisi: Test By, Assigned To (SA/BA/PSA), Developer (Kosongkan). Isi Comment / Deskripsi: Step, Issue, Expected, Actual, Evidence. Klasifikasi Severity (Dampak Bug): MAJOR (Stopper), MEDIUM (Workaround exists), MINOR (Gangguan kecil), KOSMETIK (Visual saja), NOT BUG, NICE TO HAVE, MUST TO HAVE. Priority (Prioritas Pengerjaan): HIGH (Dikerjakan dulu), MEDIUM (Setelah High), LOW (Terakhir)."
    }
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-8relative">
       {/* Modal Popup for Script Example */}
       {showScriptModal && (
        <div 
          className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-900/80 backdrop-blur-sm p-4 animate-fade-in"
          onClick={() => setShowScriptModal(false)}
        >
          <div 
            className="bg-white rounded-xl shadow-2xl max-w-5xl w-full max-h-[90vh] flex flex-col overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex justify-between items-center p-4 border-b border-slate-200">
               <h3 className="font-bold text-slate-800 flex items-center">
                 <FileSpreadsheet className="w-5 h-5 mr-2 text-green-600" />
                 Contoh Format Naskah UAT (Excel)
               </h3>
               <button 
                onClick={() => setShowScriptModal(false)}
                className="p-1 rounded-full hover:bg-slate-100 transition-colors"
               >
                 <X className="w-6 h-6 text-slate-500" />
               </button>
            </div>

            {/* Modal Content / Image */}
            <div className="flex-1 overflow-auto bg-slate-100 p-4 flex items-center justify-center">
                <img 
                  src="/example-uat-script.png" 
                  alt="Contoh Script UAT" 
                  className="max-w-full h-auto object-contain shadow-lg rounded-md"
                  onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      // Fallback visual if image not found
                      const parent = e.currentTarget.parentElement;
                      if(parent) {
                          parent.innerHTML = `
                            <div class="flex flex-col items-center justify-center p-12 text-slate-400 bg-white border-2 border-dashed border-slate-300 rounded-xl w-full h-64">
                                <svg class="w-16 h-16 mb-4 text-green-200" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><path d="M8 13h2"/><path d="M8 17h2"/><path d="M14 13h2"/><path d="M14 17h2"/></svg>
                                <p class="text-sm font-semibold">Preview Naskah Belum Tersedia</p>
                                <p class="text-xs mt-1">Simpan file gambar di: <code>public/example-uat-script.png</code></p>
                            </div>
                          `;
                      }
                  }}
                />
            </div>

            {/* Modal Footer */}
             <div className="p-4 bg-slate-50 border-t border-slate-200 text-xs text-slate-500 text-center">
                Tips: Fokus pada kolom <strong>Step</strong>, <strong>Expected Result</strong>, dan <strong>Actual Result</strong>.
             </div>
          </div>
        </div>
      )}
      
      {/* Image Preview Modal (Updated Style) */}
      {previewImage && (
        <div 
          className="fixed inset-0 z-[70] flex items-center justify-center bg-slate-900/80 backdrop-blur-sm p-4 animate-fade-in"
          onClick={() => setPreviewImage(null)}
        >
          <div 
            className="bg-white rounded-xl shadow-2xl max-w-5xl w-full max-h-[90vh] flex flex-col overflow-hidden animate-scale-up"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex justify-between items-center p-4 border-b border-slate-200">
               <h3 className="font-bold text-slate-800 flex items-center">
                 <ImageIcon className="w-5 h-5 mr-2 text-blue-600" />
                 Preview Screenshot
               </h3>
               <button 
                onClick={() => setPreviewImage(null)}
                className="p-1 rounded-full hover:bg-slate-100 transition-colors"
               >
                 <X className="w-6 h-6 text-slate-500" />
               </button>
            </div>

            {/* Modal Content */}
            <div className="flex-1 overflow-auto bg-slate-100 p-4 flex items-center justify-center">
                <img 
                  src={previewImage} 
                  alt="Preview" 
                  className="max-w-full h-auto object-contain shadow-sm rounded" 
                />
            </div>
            
            {/* Optional Footer */}
             <div className="p-3 bg-slate-50 border-t border-slate-200 text-xs text-slate-400 text-center">
                Zoom atau scroll jika gambar terlalu besar.
             </div>
          </div>
        </div>
      )}


      <div className="mb-10 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">Panduan User UAT</h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-6">
          Panduan lengkap dan mendetail untuk User dalam melakukan validasi aplikasi secara mandiri.
        </p>
      </div>

      <div className="mb-8 text-center">
        <a 
            href="/Guide_User(v1).pdf" 
            download 
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-xl shadow-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all transform hover:-translate-y-1"
          >
            <Download className="w-5 h-5 mr-2" />
            Download PDF Guide User
        </a>
      </div>

      {/* Modern Flowchart Banner for User Guide */}
      <div className="mb-8 rounded-xl p-1">
         <div className="bg-white rounded-lg p-6 md:p-8">
            <h3 className="text-center font-bold text-slate-800 mb-6 uppercase tracking-wider text-sm hidden">Alur UAT Mandiri (Klik untuk detail)</h3>
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 max-w-3xl mx-auto">
                
                {/* Step 1 - Persiapan */}
                <button 
                  onClick={() => scrollToSection('Persiapan')}
                  className="flex flex-col items-center text-center group cursor-pointer w-full md:w-auto focus:outline-none"
                >
                    <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-3 group-hover:bg-blue-200 transition-colors group-hover:scale-110 duration-300 shadow-sm">
                        <FileText className="w-7 h-7 text-blue-600" />
                    </div>
                    <span className="font-bold text-slate-800 text-lg group-hover:text-blue-700 transition-colors">Persiapan</span>
                    <span className="text-xs text-slate-500 mt-1">Persiapan Skrip UAT</span>
                </button>

                {/* Arrow */}
                <div className="hidden md:block">
                    <ArrowRight className="w-6 h-6 text-slate-300" />
                </div>
                <div className="md:hidden">
                    <ArrowDown className="w-6 h-6 text-slate-300" />
                </div>

                {/* Step 2 - Eksekusi */}
                <button 
                  onClick={() => scrollToSection('execution')}
                  className="flex flex-col items-center text-center group cursor-pointer w-full md:w-auto focus:outline-none"
                >
                    <div className="w-16 h-16 rounded-full bg-cyan-100 flex items-center justify-center mb-3 group-hover:bg-cyan-200 transition-colors group-hover:scale-110 duration-300 shadow-sm">
                        <PlayCircle className="w-7 h-7 text-cyan-600" />
                    </div>
                    <span className="font-bold text-slate-800 text-lg group-hover:text-cyan-700 transition-colors">Pelaksanaan Testing</span>
                    <span className="text-xs text-slate-500 mt-1">Lakukan Step-by-Step</span>
                </button>

                {/* Arrow */}
                <div className="hidden md:block">
                    <ArrowRight className="w-6 h-6 text-slate-300" />
                </div>
                <div className="md:hidden">
                    <ArrowDown className="w-6 h-6 text-slate-300" />
                </div>

                {/* Step 3 - Report Bug */}
                <button 
                  onClick={() => scrollToSection('bug-reporting')}
                  className="flex flex-col items-center text-center group cursor-pointer w-full md:w-auto focus:outline-none"
                >
                    <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center mb-3 group-hover:bg-red-200 transition-colors group-hover:scale-110 duration-300 shadow-sm">
                        <Bug className="w-7 h-7 text-red-600" />
                    </div>
                    <span className="font-bold text-slate-800 text-lg group-hover:text-red-700 transition-colors">Pelaporan Bug</span>
                    <span className="text-xs text-slate-500 mt-1">Jika Actual tidak sama dengan Expected</span>
                </button>

            </div>
         </div>
      </div>

      <div className="space-y-6">
        {sections.map((section) => (
          <div key={section.id} id={`section-${section.id}`} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden transition-all hover:shadow-md">
            <button
              onClick={() => toggleSection(section.id)}
              className="w-full px-6 py-5 flex items-center justify-between bg-white focus:outline-none hover:bg-slate-50 transition-colors"
            >
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-blue-50 rounded-full border border-blue-100">
                  {section.icon}
                </div>
                <span className="text-xl font-bold text-slate-800 text-left">{section.title}</span>
              </div>
              {expandedSection === section.id ? (
                <div className="bg-slate-100 p-1 rounded-full">
                   <ChevronUp className="w-5 h-5 text-slate-500" />
                </div>
              ) : (
                <div className="p-1 rounded-full">
                   <ChevronDown className="w-5 h-5 text-slate-400" />
                </div>
              )}
            </button>
            
            {expandedSection === section.id && (
              <div className="px-6 pb-8 pt-2 border-t border-slate-100 bg-white animate-fade-in">
                {section.content}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

// Simple ArrowDown component for mobile view within this file
const ArrowDown = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M12 5v14"/><path d="m19 12-7 7-7-7"/></svg>
);