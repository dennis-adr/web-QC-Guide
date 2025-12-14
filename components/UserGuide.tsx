import React, { useState } from 'react';
import { ChevronDown, ChevronUp, FileText, CheckCircle, List, AlertTriangle, Clock, Tag, Download, ArrowRight, PlayCircle, Bug, FileSpreadsheet, AlertCircle, Upload } from 'lucide-react';

interface GuideSectionItem {
  id: string;
  title: string;
  icon: React.ReactNode;
  content: React.ReactNode;
  textContent: string; // Added for full-text search
}

export const UserGuide: React.FC = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>('intro');

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
        <div className="space-y-4">
          <p className="text-slate-600 leading-relaxed">
            <strong>User Acceptance Testing (UAT)</strong> dilakukan secara mandiri oleh User untuk memvalidasi apakah fitur sudah berjalan sesuai kebutuhan bisnis sebelum aplikasi diluncurkan.
            Dokumen ini adalah panduan resmi bagi User untuk menjalankan proses tersebut.
          </p>
          <div className="bg-blue-50 p-5 rounded-lg border border-blue-100">
            <h4 className="font-bold text-blue-900 mb-3 flex items-center">
              <List className="w-4 h-4 mr-2" />
              Alur Kerja Pengujian
            </h4>
            <ol className="list-decimal list-inside space-y-2 text-sm text-blue-800 font-medium">
              <li>Persiapan Skrip (Excel dari QC atau User sendiri)</li>
              <li>Eksekusi Testing sesuai Step</li>
              <li>Update Status di File Excel (Pass/Fail)</li>
              <li>Pelaporan Bug di Monday.com (jika Fail)</li>
              <li>Re-test setelah status 'Ready to Test'</li>
            </ol>
          </div>
        </div>
      ),
      textContent: "User Acceptance Testing (UAT) dilakukan secara mandiri oleh User untuk memvalidasi apakah fitur sudah berjalan sesuai kebutuhan bisnis sebelum aplikasi diluncurkan. Dokumen ini adalah panduan resmi bagi User untuk menjalankan proses tersebut. Alur Kerja Pengujian: Persiapan Skrip (Excel dari QC atau User sendiri), Eksekusi Testing sesuai Step, Update Status di File Excel (Pass/Fail), Pelaporan Bug di Monday.com (jika Fail), Re-test setelah status 'Ready to Test'"
    },
    {
      id: 'execution',
      title: 'Pelaksanaan Testing',
      icon: <CheckCircle className="w-5 h-5 text-green-500" />,
      content: (
        <div className="space-y-6 text-sm text-slate-700">
          <div className="space-y-4">
            <div className="p-4 bg-white border rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="font-bold text-slate-900 mb-2 border-b pb-2 flex items-center">
                <span className="bg-slate-200 text-slate-700 rounded-full w-6 h-6 flex items-center justify-center text-xs mr-2">1</span>
                Persiapan Data
              </div>
              <p>Isi data pada file UAT:</p>
              <ul className="list-disc list-inside mt-2 text-slate-600 ml-2">
                <li>Nama Tester</li>
                <li>Tanggal Test</li>
                <li>Status Awal TC</li>
              </ul>
            </div>
            <div className="p-4 bg-white border rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="font-bold text-slate-900 mb-2 border-b pb-2 flex items-center">
                <span className="bg-slate-200 text-slate-700 rounded-full w-6 h-6 flex items-center justify-center text-xs mr-2">2</span>
                Proses Testing
              </div>
              <p>Lakukan testing sesuai <strong>Step-by-Step</strong> yang tertera pada file SIT/UAT. Jangan melompat langkah.</p>
            </div>
            <div className="p-4 bg-white border rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="font-bold text-slate-900 mb-2 border-b pb-2 flex items-center">
                <span className="bg-slate-200 text-slate-700 rounded-full w-6 h-6 flex items-center justify-center text-xs mr-2">3</span>
                Validasi Hasil
              </div>
              <p>Cermati kolom <strong>Expected Result</strong>.</p>
              <p className="mt-1">Bandingkan dengan <strong>Actual Result</strong> (apa yang terjadi di aplikasi).</p>
            </div>
            <div className="p-4 bg-white border rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="font-bold text-slate-900 mb-2 border-b pb-2 flex items-center">
                <span className="bg-slate-200 text-slate-700 rounded-full w-6 h-6 flex items-center justify-center text-xs mr-2">4</span>
                Penentuan Status
              </div>
              <ul className="list-none space-y-2 mt-1 ml-2">
                <li className="flex items-center text-green-700 font-medium">
                   <CheckCircle className="w-4 h-4 mr-2" />
                   PASS: Actual sesuai Expected.
                </li>
                <li className="flex items-center text-red-700 font-medium">
                   <AlertCircle className="w-4 h-4 mr-2" />
                   FAIL: Actual BEDA dengan Expected.
                </li>
              </ul>
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
          {/* Section 1: Langkah Pelaporan */}
          <div>
            <h4 className="font-bold text-slate-900 text-lg mb-4 border-l-4 border-red-500 pl-3">Langkah Pelaporan di Monday.com</h4>
            <div className="bg-slate-50 p-4 rounded border border-slate-200">
              <div className="mb-4">
                 <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Format Judul Wajib</label>
                 <code className="block bg-slate-800 text-yellow-400 p-3 rounded font-mono text-sm shadow-inner">
                   [BUGXXX] - [Modul] - [Judul Bug]
                 </code>
                 <p className="text-xs text-slate-500 mt-1">Contoh: <code>[BUG010] - Login - Tidak bisa masuk dengan email valid</code></p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                   <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Kolom Wajib Diisi</label>
                   <ul className="space-y-2 text-sm bg-white p-3 rounded border border-slate-200">
                     <li className="flex justify-between"><span className="font-medium text-slate-700">Test By:</span> <span>Akun Anda</span></li>
                     <li className="flex justify-between"><span className="font-medium text-slate-700">Assigned To:</span> <span>SA/BA/PSA terkait</span></li>
                     <li className="flex justify-between"><span className="font-medium text-slate-700">Developer:</span> <span className="text-slate-400 italic">Kosongkan</span></li>
                   </ul>
                </div>
                <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Isi Comment / Deskripsi</label>
                    <div className="text-sm bg-white p-3 rounded border border-slate-200 space-y-1">
                        <p><span className="font-bold text-blue-600">Step:</span> Langkah testing</p>
                        <p><span className="font-bold text-blue-600">Issue:</span> Masalah yang muncul</p>
                        <p><span className="font-bold text-blue-600">Expected:</span> Harapan output</p>
                        <p><span className="font-bold text-blue-600">Actual:</span> Realita output</p>
                        <p><span className="font-bold text-blue-600">Evidence:</span> Link Gambar/Video</p>
                    </div>
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
                    <th className="px-4 py-3 text-left font-bold text-slate-700">Level</th>
                    <th className="px-4 py-3 text-left font-bold text-slate-700">Definisi</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-slate-200">
                  <tr>
                    <td className="px-4 py-3 font-bold text-red-600 bg-red-50">MAJOR</td>
                    <td className="px-4 py-3">Bug <strong>Stopper</strong>. Flow utama tidak bisa dilanjutkan sama sekali.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-bold text-orange-600">MEDIUM</td>
                    <td className="px-4 py-3">Fitur terganggu tapi masih ada jalan alternatif (workaround), atau terjadi di fitur yang tidak kritis.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-bold text-yellow-600">MINOR</td>
                    <td className="px-4 py-3">Bug kecil yang tidak terlalu mengganggu flow.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-bold text-pink-600">KOSMETIK</td>
                    <td className="px-4 py-3">Bug yang mencakup visual saja, bukan secara fungsi.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-bold text-slate-500">NOT BUG</td>
                    <td className="px-4 py-3">Card dinyatakan bukan bug.</td>
                  </tr>
                  <tr>
                     <td className="px-4 py-3 font-bold text-blue-600">NICE TO HAVE</td>
                     <td className="px-4 py-3">Bersifat opsional.</td>
                  </tr>
                  <tr>
                     <td className="px-4 py-3 font-bold text-purple-600">MUST TO HAVE</td>
                     <td className="px-4 py-3">Wajib diperbaiki.</td>
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
                       <td className="px-4 py-3">Sedang dalam proses coding/fixing oleh developer.</td>
                    </tr>
                    <tr>
                       <td className="px-4 py-3 font-bold text-yellow-600 bg-yellow-50/50">REOPEN</td>
                       <td className="px-4 py-3">Bug muncul kembali setelah dinyatakan selesai (Retest Fail).</td>
                    </tr>
                    <tr>
                       <td className="px-4 py-3 font-bold text-green-600 bg-green-50/50">CLOSED</td>
                       <td className="px-4 py-3">Bug sudah 100% clear (Retest Pass). Selesai.</td>
                    </tr>

                    {/* Category 2 */}
                    <tr className="bg-slate-100">
                        <td colSpan={2} className="px-4 py-2 text-xs font-bold text-slate-500 uppercase tracking-wider">
                            2. Fase Pengujian (Testing)
                        </td>
                    </tr>
                    <tr>
                       <td className="px-4 py-3 font-bold text-indigo-600 bg-indigo-50/50">TESTING QC</td>
                       <td className="px-4 py-3">Fixing selesai. Giliran <strong>QC Internal</strong> melakukan verifikasi.</td>
                    </tr>
                    <tr>
                       <td className="px-4 py-3 font-bold text-teal-600 bg-teal-50/50">TESTING USER</td>
                       <td className="px-4 py-3">QC Pass. Giliran <strong>User</strong> melakukan validasi (UAT).</td>
                    </tr>
                    <tr>
                       <td className="px-4 py-3 font-bold text-purple-600 bg-purple-50/50">TESTING VENDOR</td>
                       <td className="px-4 py-3">Pengecekan khusus oleh pihak ketiga/vendor.</td>
                    </tr>

                    {/* Category 3 */}
                    <tr className="bg-slate-100">
                        <td colSpan={2} className="px-4 py-2 text-xs font-bold text-slate-500 uppercase tracking-wider">
                            3. Status Teknis (Server)
                        </td>
                    </tr>
                    <tr>
                       <td className="px-4 py-3 font-mono text-xs font-bold text-slate-700 bg-slate-50">MERGE TO DEV</td>
                       <td className="px-4 py-3">Kode sedang digabungkan (Deploy) ke Server Development.</td>
                    </tr>
                    <tr>
                       <td className="px-4 py-3 font-mono text-xs font-bold text-slate-700 bg-slate-50">DONE DEV</td>
                       <td className="px-4 py-3">Selesai deploy. Sudah bisa dites di Server Development.</td>
                    </tr>
                    <tr>
                       <td className="px-4 py-3 font-mono text-xs font-bold text-slate-700 bg-slate-50">MERGE TO STG</td>
                       <td className="px-4 py-3">Kode sedang digabungkan (Deploy) ke Server Staging.</td>
                    </tr>
                    <tr>
                       <td className="px-4 py-3 font-mono text-xs font-bold text-slate-700 bg-slate-50">DONE STG</td>
                       <td className="px-4 py-3">Selesai deploy. Sudah bisa dites di Server Staging.</td>
                    </tr>

                    {/* Category 4 */}
                    <tr className="bg-slate-100">
                        <td colSpan={2} className="px-4 py-2 text-xs font-bold text-slate-500 uppercase tracking-wider">
                            4. Penundaan & Validasi
                        </td>
                    </tr>
                    <tr>
                       <td className="px-4 py-3 font-bold text-orange-600 bg-orange-50/50">PENDING</td>
                       <td className="px-4 py-3">Tertunda karena menunggu info tambahan/data dari user.</td>
                    </tr>
                    <tr>
                       <td className="px-4 py-3 font-bold text-slate-500 bg-slate-50/50">HOLD</td>
                       <td className="px-4 py-3">Sengaja ditahan/pause (Prioritas rendah atau keputusan manajemen).</td>
                    </tr>
                    <tr>
                       <td className="px-4 py-3 font-bold text-red-600 bg-red-50/50">REJECT</td>
                       <td className="px-4 py-3">Ditolak. Bukan Bug, By Design, atau tidak akan diperbaiki.</td>
                    </tr>
                    <tr>
                       <td className="px-4 py-3 font-bold text-purple-600 bg-purple-50/50">DUPLICATE</td>
                       <td className="px-4 py-3">Bug yang sama sudah pernah dilaporkan di card lain.</td>
                    </tr>
                    <tr>
                       <td className="px-4 py-3 font-bold text-teal-600 bg-teal-50/50">NEED CONFIRM</td>
                       <td className="px-4 py-3">Butuh konfirmasi atau diskusi lebih lanjut.</td>
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
    <div className="max-w-5xl mx-auto px-4 py-8">
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
                  onClick={() => scrollToSection('execution')}
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