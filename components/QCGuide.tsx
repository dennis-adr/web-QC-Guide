import React, { useState } from 'react';
import { 
  ClipboardList, 
  Users, 
  AlertTriangle, 
  CheckCircle, 
  FilePlus, 
  MonitorPlay,
  ChevronDown,
  ChevronUp,
  Tag,
  UserCheck,
  Server,
  PauseCircle,
  Download,
  Clock,
  ArrowRight,
  ListChecks,
  ShieldAlert,
  FileText,
  PlayCircle,
  Bug
} from 'lucide-react';

interface QCSectionItem {
  id: string;
  category: 'SIT' | 'UAT';
  title: string;
  icon: React.ReactNode;
  content: React.ReactNode;
  tags?: string[];
  textContent: string; 
}

export const QCGuide: React.FC = () => {
  const [activeSubTab, setActiveSubTab] = useState<'SIT' | 'UAT'>('SIT');
  const [expandedSection, setExpandedSection] = useState<string | null>('monday-sit');

  const toggleSection = (id: string) => {
    setExpandedSection(expandedSection === id ? null : id);
  };

  const scrollToSection = (category: 'SIT' | 'UAT', id: string) => {
    setActiveSubTab(category);
    setExpandedSection(id);
    setTimeout(() => {
        const element = document.getElementById(`section-${id}`);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }, 100);
  };

  const sections: QCSectionItem[] = [
    {
      id: 'sit-prep',
      category: 'SIT',
      title: 'Persiapan',
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
      category: 'SIT',
      title: 'Pelaksanaan Testing',
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
      category: 'SIT',
      title: 'Pelaporan Bug',
      icon: <ClipboardList className="w-5 h-5 text-red-500" />,
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

          {/* Priority Table */}
          <div>
            <h4 className="font-bold text-slate-900 text-lg mb-4 flex items-center border-l-4 border-blue-500 pl-3">
               <Clock className="w-5 h-5 mr-2 text-blue-500" />
               Priority (Urutan Pengerjaan)
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
                    <td className="px-4 py-3">Prioritas utama. Wajib dikerjakan terlebih dahulu sebelum task lain.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-bold text-orange-700 bg-orange-50">MEDIUM</td>
                    <td className="px-4 py-3">Prioritas menengah. Dikerjakan setelah bug High selesai.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-bold text-blue-700 bg-blue-50">LOW</td>
                    <td className="px-4 py-3">Prioritas rendah. Dikerjakan paling terakhir jika waktu memungkinkan.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Status & Workflow Table (Unified with Merged Headers) */}
          <div>
             <h4 className="font-bold text-slate-900 text-lg mb-4 flex items-center border-l-4 border-purple-500 pl-3">
               <Tag className="w-5 h-5 mr-2 text-purple-500" />
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
      textContent: "Standar Pelaporan & Referensi Status. Format Card Monday: [BUGXXX] - [Modul] - [Judul Bug]. Severity: MAJOR (Stopper), MEDIUM (Workaround), MINOR (Small), KOSMETIK (Visual), NOT BUG, NICE TO HAVE, MUST TO HAVE. Priority: HIGH (Kerjakan Dulu), MEDIUM, LOW. Workflow: OPEN, IN PROGRESS, REOPEN, CLOSED. Testing: TESTING QC, USER, VENDOR. Teknis: MERGE/DONE DEV/STG. Penundaan: PENDING (Tunggu info), HOLD (Pause), REJECT (Ditolak), DUPLICATE, NEED CONFIRM."
    },
    {
      id: 'uat-pendampingan',
      category: 'UAT',
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

  const filteredSections = sections.filter(s => s.category === activeSubTab);

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      {/* Centered Header Section */}
      <div className="mb-10 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">Panduan QC Internal</h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-6">
          SOP Quality Control & Pendampingan UAT.
        </p>
      </div>
      
      {/* Centered Download Button */}
      <div className="mb-8 text-center">
             <a 
              href="/Guide_QC(v1).pdf" 
              download 
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-xl shadow-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all transform hover:-translate-y-1"
            >
              <Download className="w-5 h-5 mr-2" />
              Download PDF Guide QC
            </a>
      </div>

      {/* Sub Tabs */}
      <div className="bg-slate-200/50 p-1 rounded-xl flex space-x-1 mb-6 max-w-md mx-auto md:mx-0">
        <button
          onClick={() => setActiveSubTab('SIT')}
          className={`flex-1 flex items-center justify-center px-4 py-2.5 rounded-lg text-sm font-bold transition-all ${
            activeSubTab === 'SIT' 
              ? 'bg-white text-indigo-700 shadow-sm' 
              : 'text-slate-500 hover:text-slate-700 hover:bg-slate-200'
          }`}
        >
          SIT (System Integration)
        </button>
        <button
          onClick={() => setActiveSubTab('UAT')}
          className={`flex-1 flex items-center justify-center px-4 py-2.5 rounded-lg text-sm font-bold transition-all ${
            activeSubTab === 'UAT' 
              ? 'bg-white text-indigo-700 shadow-sm' 
              : 'text-slate-500 hover:text-slate-700 hover:bg-slate-200'
          }`}
        >
          UAT (Pendampingan)
        </button>
      </div>

      {/* Modern Flowchart Banner for QC Guide */}
      <div className="mb-8 rounded-xl p-1">
         <div className="bg-white rounded-lg p-6 md:p-8">
            <h3 className="text-center font-bold text-slate-800 mb-6 uppercase tracking-wider text-sm hidden">Alur Kerja Quality Control (Klik untuk detail)</h3>
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 max-w-3xl mx-auto">
                
                {/* Step 1 - Review Skrip */}
                <button 
                  onClick={() => scrollToSection('SIT', 'sit-prep')}
                  className="flex flex-col items-center text-center group cursor-pointer w-full md:w-auto focus:outline-none"
                >
                    <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-3 group-hover:bg-blue-200 transition-colors group-hover:scale-110 duration-300 shadow-sm">
                        <FileText className="w-7 h-7 text-blue-600" />
                    </div>
                    <span className="font-bold text-slate-800 text-lg group-hover:text-blue-700 transition-colors">Persiapan</span>
                    <span className="text-xs text-slate-500 mt-1">Memahami flow, mempersiapkan Skrip</span>
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
                  onClick={() => scrollToSection('SIT', 'sit-exec')}
                  className="flex flex-col items-center text-center group cursor-pointer w-full md:w-auto focus:outline-none"
                >
                    <div className="w-16 h-16 rounded-full bg-cyan-100 flex items-center justify-center mb-3 group-hover:bg-cyan-200 transition-colors group-hover:scale-110 duration-300 shadow-sm">
                        <PlayCircle className="w-7 h-7 text-cyan-600" />
                    </div>
                    <span className="font-bold text-slate-800 text-lg group-hover:text-cyan-700 transition-colors">Pelaksanaan Testing</span>
                    <span className="text-xs text-slate-500 mt-1">Testing Full Cycle</span>
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
                  onClick={() => scrollToSection('SIT', 'monday-sit')}
                  className="flex flex-col items-center text-center group cursor-pointer w-full md:w-auto focus:outline-none"
                >
                    <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center mb-3 group-hover:bg-red-200 transition-colors group-hover:scale-110 duration-300 shadow-sm">
                        <Bug className="w-7 h-7 text-red-600" />
                    </div>
                    <span className="font-bold text-slate-800 text-lg group-hover:text-red-700 transition-colors">Pelaporan Bug</span>
                    <span className="text-xs text-slate-500 mt-1">Input Monday.com</span>
                </button>

            </div>
         </div>
      </div>

      {/* Content List */}
      <div className="space-y-6 min-h-[400px]">
        {filteredSections.map((section) => (
            <div key={section.id} id={`section-${section.id}`} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden transition-all hover:shadow-md">
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full px-6 py-5 flex items-center justify-between bg-white focus:outline-none hover:bg-slate-50 transition-colors"
              >
                <div className="flex items-center space-x-4">
                  <div className={`p-3 rounded-full border ${activeSubTab === 'SIT' ? 'bg-indigo-50 border-indigo-100' : 'bg-purple-50 border-purple-100'}`}>
                    {section.icon}
                  </div>
                  <span className="text-lg font-bold text-slate-800 text-left">{section.title}</span>
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