import React, { useState } from 'react';
import { 
  ClipboardList, 
  GitMerge, 
  Users, 
  AlertTriangle, 
  CheckCircle, 
  FilePlus, 
  MonitorPlay,
  Search,
  ChevronDown,
  ChevronUp,
  List,
  Clock,
  Tag,
  UserCheck,
  Server,
  PauseCircle,
  Download
} from 'lucide-react';

interface QCSectionItem {
  id: string;
  title: string;
  icon: React.ReactNode;
  content: React.ReactNode;
  tags?: string[];
  textContent: string; // Added for full-text search
}

export const QCGuide: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedSection, setExpandedSection] = useState<string | null>('monday-sit');

  const toggleSection = (id: string) => {
    setExpandedSection(expandedSection === id ? null : id);
  };

  const sections: QCSectionItem[] = [
    {
      id: 'sit-prep',
      title: 'Persiapan SIT & Negative Flow',
      icon: <FilePlus className="w-5 h-5 text-blue-600" />,
      content: (
        <div className="space-y-4 text-sm text-slate-700">
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
            <h4 className="font-bold text-blue-900 mb-2">1. Review Skrip System Analyst (SA)</h4>
            <p>Skrip dari SA biasanya hanya mencakup <strong>Positive Flow</strong> (alur utama berhasil).</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm">
             <h4 className="font-bold text-slate-900 mb-2 flex items-center">
               <AlertTriangle className="w-4 h-4 mr-2 text-orange-500" />
               Tugas QC: Tambahkan Negative Flow
             </h4>
             <p className="mb-3">Lengkapi skrip dengan skenario kegagalan untuk menguji ketahanan sistem:</p>
             <ul className="list-disc list-inside space-y-1 text-slate-600 ml-2">
               <li>Validasi Input (format email salah, no hp huruf, dll).</li>
               <li>Skenario Error (koneksi putus, timeout).</li>
               <li>Batas Karakter (input max length).</li>
               <li>Upload file type yang dilarang.</li>
             </ul>
             <div className="mt-3 text-xs bg-orange-50 text-orange-800 p-2 rounded">
               <strong>PENTING:</strong> Pastikan <em>Expected Result</em> pada TC tambahan ini sudah disepakati oleh SA/BA.
             </div>
          </div>
        </div>
      ),
      textContent: "Persiapan SIT & Negative Flow. Review Skrip System Analyst (SA): Skrip biasanya hanya mencakup Positive Flow. Tugas QC: Tambahkan Negative Flow. Lengkapi dengan skenario kegagalan: Validasi Input, Skenario Error, Batas Karakter, Upload file terlarang. PENTING: Pastikan Expected Result disepakati SA/BA."
    },
    {
      id: 'sit-exec',
      title: 'Eksekusi & Status Logic (SIT)',
      icon: <MonitorPlay className="w-5 h-5 text-green-600" />,
      content: (
        <div className="space-y-6 text-sm">
          <div className="bg-white p-5 rounded-lg border border-slate-200 shadow-sm">
            <h4 className="font-bold text-slate-800 mb-4 border-b pb-2">Langkah Pelaksanaan SIT</h4>
            <ol className="list-decimal list-inside space-y-3 text-slate-700">
              <li className="pl-2">
                <strong>Isi Data Awal:</strong> Lengkapi data pada file SIT seperti Nama Tester, Tanggal Test, dan Status TC.
              </li>
              <li className="pl-2">
                <strong>Lakukan Testing:</strong> Jalankan aplikasi sesuai step-step yang terdapat pada skrip SIT.
              </li>
              <li className="pl-2">
                <strong>Cermati Result:</strong> Bandingkan output aplikasi dengan kolom <em>Expected Result</em>.
              </li>
              <li className="pl-2">
                <strong>Catat Hasil:</strong> Isi <em>Date Test</em> dan tulis hasil testing pada kolom <em>Actual Result</em>.
              </li>
            </ol>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-green-200 bg-green-50 rounded-lg p-4">
              <div className="font-bold text-green-800 mb-2 flex items-center">
                <CheckCircle className="w-4 h-4 mr-2" />
                Skenario PASS
              </div>
              <p className="text-green-700 mb-2">Jika <strong>Actual Result == Expected Result</strong></p>
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
              <p className="text-red-700 mb-2">Jika <strong>Actual Result != Expected Result</strong></p>
              <ul className="list-decimal list-inside text-red-800 space-y-1 text-xs font-medium">
                <li>Ubah <strong>First Status</strong> &rarr; FAIL</li>
                <li>Lapor Bug di Monday.</li>
                <li>Tunggu status 'Ready to Test'.</li>
                <li>Lakukan Retest.</li>
              </ul>
            </div>
          </div>

          <div className="bg-slate-100 p-4 rounded-lg border border-slate-200">
            <h4 className="font-bold text-slate-800 mb-2">Proses Retest (Pengujian Ulang)</h4>
            <div className="space-y-2">
              <div className="flex items-start">
                <span className="bg-slate-800 text-white text-[10px] px-2 py-0.5 rounded mr-2 mt-0.5">IF FIXED</span>
                <p>Ubah <strong>Last Status</strong> &rarr; PASS. <br/> Update Monday &rarr; CLOSED + Komen: <code>[CLOSED] DD/MM/YYYY - Evidence</code></p>
              </div>
              <div className="flex items-start">
                <span className="bg-red-600 text-white text-[10px] px-2 py-0.5 rounded mr-2 mt-0.5">IF NOT</span>
                <p>Ubah status Monday &rarr; REOPEN. Ulangi siklus.</p>
              </div>
            </div>
          </div>
        </div>
      ),
      textContent: "Eksekusi & Status Logic (SIT). Langkah Pelaksanaan: Isi Data Awal, Lakukan Testing, Cermati Result, Catat Hasil. Skenario PASS: Jika Actual Result == Expected Result, ubah First & Second Status jadi PASS. Skenario FAIL: Jika Actual Result != Expected Result, ubah First Status jadi FAIL, Lapor Bug, Tunggu Ready to Test, Lakukan Retest. Proses Retest: Jika Fixed (Last Status PASS, Monday CLOSED), Jika Not Fixed (Monday REOPEN)."
    },
    {
      id: 'monday-sit',
      title: 'Standar Pelaporan & Referensi Status',
      icon: <ClipboardList className="w-5 h-5 text-purple-600" />,
      content: (
        <div className="space-y-8 text-sm">
          {/* Format Card */}
          <div className="bg-purple-50 p-4 rounded-lg border border-purple-100">
            <h4 className="font-bold text-purple-900 mb-3">Format Card Monday (SIT Group)</h4>
            <div className="space-y-2">
              <div className="grid grid-cols-[100px_1fr] gap-2 items-center">
                <span className="font-semibold text-slate-600">Judul:</span>
                <code className="bg-white px-2 py-1 rounded border border-slate-200 text-xs shadow-sm">
                  [BUGXXX] - [Modul] - [Judul Bug]
                </code>
              </div>
              <div className="grid grid-cols-[100px_1fr] gap-2 items-center">
                <span className="font-semibold text-slate-600">Test By:</span>
                <span>Akun Anda</span>
              </div>
              <div className="grid grid-cols-[100px_1fr] gap-2 items-center">
                <span className="font-semibold text-slate-600">Developer:</span>
                <span className="italic text-slate-400">Kosongkan (Diisi SA/BA)</span>
              </div>
              <div className="grid grid-cols-[100px_1fr] gap-2 items-center">
                <span className="font-semibold text-slate-600">Assign:</span>
                <span>SA/BA/PSA terkait</span>
              </div>
            </div>
          </div>
          
          {/* Severity Table */}
          <div>
            <h4 className="font-bold text-slate-900 text-lg mb-4 flex items-center border-l-4 border-orange-500 pl-3">
              <AlertTriangle className="w-5 h-5 mr-2 text-orange-500" />
              Klasifikasi Severity (Dampak)
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
                    <td className="px-4 py-3">Fitur terganggu tapi ada workaround, atau fitur non-kritis.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-bold text-yellow-600">MINOR</td>
                    <td className="px-4 py-3">Bug kecil, flow aman.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-bold text-pink-600">KOSMETIK</td>
                    <td className="px-4 py-3">Masalah visual (UI/UX) saja.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-bold text-slate-500">NOT BUG</td>
                    <td className="px-4 py-3">Dinyatakan bukan bug (by design).</td>
                  </tr>
                  <tr>
                     <td className="px-4 py-3 font-bold text-blue-600">NICE TO HAVE</td>
                     <td className="px-4 py-3">Opsional/Saran improvement.</td>
                  </tr>
                  <tr>
                     <td className="px-4 py-3 font-bold text-purple-600">MUST TO HAVE</td>
                     <td className="px-4 py-3">Requirement wajib yang terlewat.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Priority Grid */}
          <div>
            <h4 className="font-bold text-slate-900 text-lg mb-4 flex items-center border-l-4 border-blue-500 pl-3">
               <Clock className="w-5 h-5 mr-2 text-blue-500" />
               Priority (Urutan Pengerjaan)
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
               <div className="bg-red-50 border border-red-200 p-3 rounded-lg text-center">
                  <span className="block font-bold text-red-700 mb-1">HIGH</span>
                  <p className="text-xs text-red-600">Kerjakan Dulu</p>
               </div>
               <div className="bg-orange-50 border border-orange-200 p-3 rounded-lg text-center">
                  <span className="block font-bold text-orange-700 mb-1">MEDIUM</span>
                  <p className="text-xs text-orange-600">Setelah High</p>
               </div>
               <div className="bg-blue-50 border border-blue-200 p-3 rounded-lg text-center">
                  <span className="block font-bold text-blue-700 mb-1">LOW</span>
                  <p className="text-xs text-blue-600">Terakhir</p>
               </div>
            </div>
          </div>

          {/* Detailed Status Workflow Cards */}
          <div>
             <h4 className="font-bold text-slate-900 text-lg mb-4 flex items-center border-l-4 border-purple-500 pl-3">
               <Tag className="w-5 h-5 mr-2 text-purple-500" />
               Status & Workflow (Referensi Lengkap)
             </h4>
             <div className="grid grid-cols-1 gap-6">
                
                {/* 1. Status Pengerjaan */}
                <div className="border border-slate-200 rounded-lg overflow-hidden shadow-sm">
                   <div className="bg-slate-800 px-4 py-2 font-bold text-white text-xs uppercase tracking-wide">
                     Workflow Utama
                   </div>
                   <div className="p-4 space-y-3 bg-white">
                      <div className="flex flex-col sm:flex-row sm:items-start">
                         <span className="bg-slate-200 text-slate-700 px-2 py-0.5 rounded text-xs font-bold min-w-[100px] text-center mb-1 sm:mb-0 sm:mr-3">OPEN</span>
                         <p className="text-slate-600 text-xs">Bug baru lapor, belum dikerjakan.</p>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-start">
                         <span className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded text-xs font-bold min-w-[100px] text-center mb-1 sm:mb-0 sm:mr-3">IN PROGRESS</span>
                         <p className="text-slate-600 text-xs">Sedang difixing developer.</p>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-start">
                         <span className="bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded text-xs font-bold min-w-[100px] text-center mb-1 sm:mb-0 sm:mr-3">REOPEN</span>
                         <p className="text-slate-600 text-xs">Muncul lagi setelah fix.</p>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-start">
                         <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded text-xs font-bold min-w-[100px] text-center mb-1 sm:mb-0 sm:mr-3">CLOSED</span>
                         <p className="text-slate-600 text-xs">Sudah clear.</p>
                      </div>
                   </div>
                </div>

                {/* 2. Status Pengujian */}
                <div className="border border-blue-200 rounded-lg overflow-hidden shadow-sm">
                   <div className="bg-blue-600 px-4 py-2 font-bold text-white text-xs uppercase tracking-wide">
                     Fase Testing
                   </div>
                   <div className="p-4 space-y-3 bg-white">
                      <div className="flex flex-col sm:flex-row sm:items-start">
                         <span className="bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded text-xs font-bold min-w-[100px] text-center mb-1 sm:mb-0 sm:mr-3">TESTING QC</span>
                         <p className="text-slate-600 text-xs">Verifikasi oleh QC Internal.</p>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-start">
                         <span className="bg-teal-100 text-teal-700 px-2 py-0.5 rounded text-xs font-bold min-w-[100px] text-center mb-1 sm:mb-0 sm:mr-3">TESTING USER</span>
                         <p className="text-slate-600 text-xs">Validasi oleh User (UAT).</p>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-start">
                         <span className="bg-purple-100 text-purple-700 px-2 py-0.5 rounded text-xs font-bold min-w-[100px] text-center mb-1 sm:mb-0 sm:mr-3">TESTING VENDOR</span>
                         <p className="text-slate-600 text-xs">Pengecekan pihak ketiga.</p>
                      </div>
                   </div>
                </div>

                {/* 3. Status Teknis */}
                <div className="border border-slate-300 rounded-lg overflow-hidden shadow-sm">
                   <div className="bg-slate-600 px-4 py-2 font-bold text-white text-xs uppercase tracking-wide">
                     Server & Deployment
                   </div>
                   <div className="p-4 bg-slate-50 grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                      <div>
                         <strong className="block mb-1">Development</strong>
                         <ul className="space-y-1 text-slate-600">
                            <li><span className="font-mono font-bold">MERGE TO DEV:</span> OTW Dev Server.</li>
                            <li><span className="font-mono font-bold">DONE DEV:</span> Ready di Dev Server.</li>
                         </ul>
                      </div>
                      <div>
                         <strong className="block mb-1">Staging</strong>
                         <ul className="space-y-1 text-slate-600">
                            <li><span className="font-mono font-bold">MERGE TO STG:</span> OTW Staging.</li>
                            <li><span className="font-mono font-bold">DONE STG:</span> Ready di Staging.</li>
                         </ul>
                      </div>
                   </div>
                </div>

                {/* 4. Status Penundaan */}
                <div className="border border-orange-200 rounded-lg overflow-hidden shadow-sm">
                   <div className="bg-orange-500 px-4 py-2 font-bold text-white text-xs uppercase tracking-wide">
                     Penundaan & Validasi
                   </div>
                   <div className="p-4 space-y-2 bg-white text-xs">
                      <div className="flex items-center">
                         <span className="w-2 h-2 rounded-full bg-orange-400 mr-2"></span>
                         <p><strong className="text-slate-800">PENDING:</strong> Menunggu info tambahan.</p>
                      </div>
                      <div className="flex items-center">
                         <span className="w-2 h-2 rounded-full bg-slate-400 mr-2"></span>
                         <p><strong className="text-slate-800">HOLD:</strong> Sengaja ditahan/pause.</p>
                      </div>
                      <div className="flex items-center">
                         <span className="w-2 h-2 rounded-full bg-red-500 mr-2"></span>
                         <p><strong className="text-slate-800">REJECT:</strong> Ditolak / Bukan Bug.</p>
                      </div>
                      <div className="flex items-center">
                         <span className="w-2 h-2 rounded-full bg-purple-400 mr-2"></span>
                         <p><strong className="text-slate-800">DUPLICATE:</strong> Sudah ada di card lain.</p>
                      </div>
                      <div className="flex items-center">
                         <span className="w-2 h-2 rounded-full bg-teal-400 mr-2"></span>
                         <p><strong className="text-slate-800">NEED CONFIRM:</strong> Butuh konfirmasi.</p>
                      </div>
                   </div>
                </div>
             </div>
          </div>

        </div>
      ),
      textContent: "Standar Pelaporan & Referensi Status. Format Card Monday: [BUGXXX] - [Modul] - [Judul Bug]. Severity: MAJOR (Stopper), MEDIUM (Workaround), MINOR (Small), KOSMETIK (Visual), NOT BUG, NICE TO HAVE, MUST TO HAVE. Priority: HIGH (Kerjakan Dulu), MEDIUM, LOW. Workflow: OPEN, IN PROGRESS, REOPEN, CLOSED. Testing: TESTING QC, USER, VENDOR. Teknis: MERGE/DONE DEV/STG. Penundaan: PENDING (Tunggu info), HOLD (Pause), REJECT (Ditolak), DUPLICATE, NEED CONFIRM."
    },
    {
      id: 'uat-pendampingan',
      title: 'UAT Pendampingan (QC Role)',
      icon: <Users className="w-5 h-5 text-indigo-600" />,
      content: (
        <div className="space-y-5 text-sm">
          <p className="text-slate-600 italic">
            "Pada proses ini, QC bertindak sebagai perantara demo. User tidak menyentuh Monday secara langsung."
          </p>
          
          <div className="space-y-4">
             <div className="border-l-4 border-indigo-500 pl-4">
                <h4 className="font-bold text-slate-800">1. Persiapan (Sebelum Meeting)</h4>
                <ul className="list-disc list-inside text-slate-600 mt-1 space-y-1">
                  <li><strong>Environment Check:</strong> Pastikan server UAT stabil.</li>
                  <li><strong>Data Dummy:</strong> Siapkan akun login user & data transaksi.</li>
                  <li><strong>Skrip:</strong> Siapkan file Excel UAT.</li>
                </ul>
             </div>

             <div className="border-l-4 border-indigo-500 pl-4">
                <h4 className="font-bold text-slate-800">2. Saat Pelaksanaan (On Air)</h4>
                <ul className="list-disc list-inside text-slate-600 mt-1 space-y-1">
                  <li><strong>Share Screen:</strong> QC yang melakukan share screen & navigasi.</li>
                  <li><strong>Instruksi:</strong> User memberikan instruksi/skenario.</li>
                  <li><strong>Input Bug:</strong> Jika User komplain, QC yang input ke Monday (Group UAT).</li>
                  <li><strong>Batasan:</strong> Jangan menjanjikan fitur di luar scope. Jika ragu, lempar ke SA/BA yang hadir.</li>
                </ul>
             </div>

             <div className="border-l-4 border-indigo-500 pl-4">
                <h4 className="font-bold text-slate-800">3. Handover (Setelah Sesi)</h4>
                <ul className="list-disc list-inside text-slate-600 mt-1 space-y-1">
                  <li>Rekap file Excel (pastikan Pass/Fail terisi).</li>
                  <li>Rapikan Monday (lengkapi severity/priority yang mungkin terlewat saat live).</li>
                  <li>Info ke SA/BA bahwa sesi selesai.</li>
                </ul>
             </div>
          </div>
        </div>
      ),
      textContent: "UAT Pendampingan (QC Role). QC bertindak sebagai perantara demo. Persiapan: Environment Check, Data Dummy, Skrip. Pelaksanaan: Share Screen, Jalankan Instruksi User, Input Bug ke Monday, Jangan menjanjikan fitur di luar scope. Handover: Rekap file Excel, Rapikan Monday, Info ke SA/BA."
    }
  ];

  const filteredSections = sections.filter(s => 
    s.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    s.textContent.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <div className="mb-10 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">Panduan QC Internal</h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-6">
          Standar Operasional Prosedur (SOP) untuk Quality Control dalam fase SIT dan pendampingan UAT.
        </p>
        
        {/* DOWNLOAD BUTTON ADDED HERE */}
        <div className="flex justify-center">
          <a 
            href="/Guide_QC.pdf" 
            download 
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all transform hover:-translate-y-1"
          >
            <Download className="w-5 h-5 mr-2" />
            Download PDF Guide QC
          </a>
        </div>
      </div>

      <div className="relative mb-8 max-w-2xl mx-auto">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-slate-400" />
        </div>
        <input
          type="text"
          className="block w-full pl-11 pr-4 py-4 border border-slate-200 rounded-full leading-5 bg-white placeholder-slate-400 focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all shadow-sm"
          placeholder="Cari prosedur SIT, format Monday, atau flow UAT..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="space-y-6">
        {filteredSections.map((section) => (
          <div key={section.id} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden transition-all hover:shadow-md">
            <button
              onClick={() => toggleSection(section.id)}
              className="w-full px-6 py-5 flex items-center justify-between bg-white focus:outline-none hover:bg-slate-50 transition-colors"
            >
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-indigo-50 rounded-full border border-indigo-100">
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