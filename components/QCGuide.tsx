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
  Download,
  Clock,
  ArrowRight,
  ArrowDown,
  ListChecks,
  ShieldAlert,
  FileText,
  PlayCircle,
  Bug,
  Link,
  Image as ImageIcon,
  Info,
  List,
  Eye,
  FileSpreadsheet,
  X,
  ZoomIn,
  Video,
  Presentation,
  UserCog,
  Search,
  RefreshCw,
  User,
  AlertCircle,
  MessageSquare
} from 'lucide-react';

interface QCSectionItem {
  id: string;
  category: 'SIT' | 'UAT_PENDAMPINGAN' | 'UAT_MANDIRI';
  title: string;
  icon: React.ReactNode;
  content: React.ReactNode;
  tags?: string[];
  textContent: string; 
}

export const QCGuide: React.FC = () => {
  const [activeSubTab, setActiveSubTab] = useState<'SIT' | 'UAT_PENDAMPINGAN' | 'UAT_MANDIRI'>('SIT');
  const [expandedSection, setExpandedSection] = useState<string | null>('sit-prep');
  const [showScriptModal, setShowScriptModal] = useState(false);
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const toggleSection = (id: string) => {
    setExpandedSection(expandedSection === id ? null : id);
  };

  const scrollToSection = (category: 'SIT' | 'UAT_PENDAMPINGAN' | 'UAT_MANDIRI', id: string) => {
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
    // --- SIT SECTIONS ---
    {
      id: 'sit-prep',
      category: 'SIT',
      title: 'Persiapan SIT & Dokumentasi',
      icon: <FilePlus className="w-5 h-5 text-blue-600" />,
      content: (
        <div className="space-y-4 text-sm text-slate-700">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
              <h4 className="font-bold text-blue-900 mb-2 flex items-center">
                <Search className="w-4 h-4 mr-2" /> 1. Studi FD & Flow Bisnis
              </h4>
              <p className="mb-2">Langkah pertama setelah di-assign ke project:</p>
              <ul className="list-disc list-inside space-y-1 text-slate-700">
                <li>Mempelajari <strong>Functional Design (FD)</strong> untuk memahami menu dan ketentuan sistem.</li>
                <li>Aktif bertanya dan ikut <strong>Meet Grooming</strong> bersama BA (Business Analyst).</li>
              </ul>
            </div>
            <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-100">
              <h4 className="font-bold text-indigo-900 mb-2 flex items-center">
                <FileText className="w-4 h-4 mr-2" /> 2. Review Skrip SA
              </h4>
              <p>Skrip dari SA umumnya hanya mencakup <strong>Positive Flow</strong> (alur utama berhasil).</p>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm">
             <h4 className="font-bold text-slate-900 mb-2 flex items-center">
               <AlertTriangle className="w-4 h-4 mr-2 text-orange-500" />
               Tugas Utama QC: Lengkapi Skrip
             </h4>
             <p className="mb-3">Tambahkan <strong>Negative Flow</strong> untuk menguji ketahanan sistem:</p>
             <ul className="list-disc list-inside space-y-1 text-slate-600 ml-2">
               <li>Validasi Input (format salah, batas karakter, tipe file dilarang).</li>
               <li>Skenario Error (koneksi putus, timeout).</li>
               <li>Pastikan <em>Expected Result</em> sudah direview dan disepakati SA/BA.</li>
             </ul>
          </div>
        </div>
      ),
      textContent: "Persiapan SIT. Studi FD & Flow Bisnis: Pelajari FD, ikut meet grooming BA. Review Skrip SA: Skrip SA biasanya hanya Positive Flow. Tugas QC: Tambahkan Negative Flow (validasi input, error, batas karakter). Pastikan Expected Result disepakati SA/BA."
    },
    {
      id: 'sit-exec',
      category: 'SIT',
      title: 'Pelaksanaan Testing',
      icon: <MonitorPlay className="w-5 h-5 text-green-600" />,
      content: (
        <div className="space-y-6 text-sm">
          {/* VISUAL FLOW SIT EXECUTION */}
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 mb-6">
            <h5 className="font-bold text-slate-800 mb-4 text-xs uppercase tracking-wider text-center">Flowchart Eksekusi SIT</h5>
            <div className="flex flex-row items-center justify-between overflow-x-auto gap-4 pb-2">
                <div className="flex flex-col items-center text-center min-w-[80px]">
                   <div className="w-10 h-10 rounded-full bg-white border-2 border-slate-200 flex items-center justify-center mb-1 shadow-sm"><FileText className="w-5 h-5 text-slate-500" /></div>
                   <p className="font-bold text-[10px]">1. Data Awal</p>
                </div>
                <ArrowRight className="text-slate-300 w-4 h-4 flex-shrink-0" />
                <div className="flex flex-col items-center text-center min-w-[80px]">
                   <div className="w-10 h-10 rounded-full bg-white border-2 border-indigo-200 flex items-center justify-center mb-1 shadow-sm"><PlayCircle className="w-5 h-5 text-indigo-600" /></div>
                   <p className="font-bold text-[10px]">2. Testing</p>
                </div>
                <ArrowRight className="text-slate-300 w-4 h-4 flex-shrink-0" />
                <div className="flex flex-col items-center text-center min-w-[80px]">
                   <div className="w-10 h-10 rounded-full bg-white border-2 border-blue-200 flex items-center justify-center mb-1 shadow-sm"><Search className="w-5 h-5 text-blue-600" /></div>
                   <p className="font-bold text-[10px]">3. Validasi</p>
                </div>
                <ArrowRight className="text-slate-300 w-4 h-4 flex-shrink-0" />
                <div className="flex flex-col items-center text-center min-w-[80px]">
                   <div className="w-10 h-10 rounded-full bg-white border-2 border-emerald-200 flex items-center justify-center mb-1 shadow-sm"><Tag className="w-5 h-5 text-emerald-600" /></div>
                   <p className="font-bold text-[10px]">4. Status</p>
                </div>
                <ArrowRight className="text-slate-300 w-4 h-4 flex-shrink-0" />
                <div className="flex flex-col items-center text-center min-w-[80px]">
                   <div className="w-10 h-10 rounded-full bg-white border-2 border-purple-200 flex items-center justify-center mb-1 shadow-sm"><Link className="w-5 h-5 text-purple-600" /></div>
                   <p className="font-bold text-[10px]">5. Evidence</p>
                </div>
                <ArrowRight className="text-slate-300 w-4 h-4 flex-shrink-0" />
                <div className="flex flex-col items-center text-center min-w-[80px]">
                   <div className="w-10 h-10 rounded-full bg-white border-2 border-slate-700 flex items-center justify-center mb-1 shadow-sm"><UserCheck className="w-5 h-5 text-slate-700" /></div>
                   <p className="font-bold text-[10px]">6. Approval</p>
                </div>
            </div>
          </div>

          <div className="bg-white p-5 rounded-lg border border-slate-200 shadow-sm">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 border-b pb-2 gap-2">
                <h4 className="font-bold text-slate-800">Langkah Pelaksanaan SIT</h4>
                <button 
                  onClick={() => setShowScriptModal(true)}
                  className="inline-flex items-center px-3 py-1.5 bg-blue-50 text-blue-700 text-xs font-bold rounded-lg hover:bg-blue-100 transition-colors border border-blue-200"
                >
                    <Eye className="w-3 h-3 mr-1.5" /> Lihat Contoh Naskah
                </button>
            </div>
            <ol className="list-decimal list-inside space-y-3 text-slate-700">
              <li className="pl-2"><strong>Isi Data Awal:</strong> Nama Tester, Tanggal Test, dan Status TC awal.</li>
              <li className="pl-2"><strong>Eksekusi:</strong> Jalankan aplikasi sesuai step-step pada skrip SIT.</li>
              <li className="pl-2"><strong>Cermati Result:</strong> Bandingkan output real dengan <em>Expected Result</em>.</li>
              <li className="pl-2"><strong>Update Status:</strong> PASS jika sesuai, FAIL jika tidak. Update juga overall progress status.</li>
              <li className="pl-2"><strong>Evidence:</strong> Wajib upload ke <strong>SharePoint</strong> dan cantumkan link-nya pada kolom evidence.</li>
              <li className="pl-2"><strong>Approval Reviewer:</strong> Hubungi reviewer SIT untuk review hasil dan approval dokumen jika sudah selesai semua.</li>
            </ol>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-green-200 bg-green-50 rounded-lg p-4">
              <div className="font-bold text-green-800 mb-2 flex items-center"><CheckCircle className="w-4 h-4 mr-2" /> Skenario PASS</div>
              <ul className="list-decimal list-inside text-green-800 space-y-1 text-xs font-medium">
                <li>Ubah <strong>First & Second Status</strong> &rarr; PASS</li>
                <li>Kosongkan kolom Date Retest.</li>
              </ul>
            </div>
            <div className="border border-red-200 bg-red-50 rounded-lg p-4">
              <div className="font-bold text-red-800 mb-2 flex items-center"><AlertTriangle className="w-4 h-4 mr-2" /> Skenario FAIL</div>
              <ul className="list-decimal list-inside text-red-800 space-y-1 text-xs font-medium">
                <li>Ubah <strong>First Status</strong> &rarr; FAIL & Lapor Monday</li>
                <li>Retest jika status 'Ready to Test' / 'Done Dev'.</li>
                <li>Fixed? Ubah <strong>Last Status</strong> &rarr; PASS, update Monday CLOSED + Komen Evidence.</li>
                <li>Belum? Status Monday &rarr; REOPEN dan ulangi proses.</li>
              </ul>
            </div>
          </div>
        </div>
      ),
      textContent: "Pelaksanaan Testing SIT. Langkah: Isi data awal, eksekusi, cermati result, update status, upload evidence SharePoint, update overall progress, hubungi reviewer SIT untuk approval. PASS: First & Second Status PASS. FAIL: First Status FAIL, Lapor Monday, Retest, Fixed (Last Status PASS, Monday CLOSED), Not Fixed (Monday REOPEN)."
    },
    {
      id: 'monday-sit',
      category: 'SIT',
      title: 'Pelaporan Bug',
      icon: <AlertCircle className="w-5 h-5 text-red-500" />,
      content: (
        <div className="space-y-8 text-sm">
          {/* Section 1: Langkah Pelaporan */}
          <div>
            <h4 className="font-bold text-slate-900 text-lg mb-4 border-l-4 border-red-500 pl-3">Standar Pelaporan di Monday.com (Group SIT)</h4>
            
            <div className="space-y-8">
              
              {/* BLOCK 1: Header & Fields */}
              <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 shadow-sm">
                 <h5 className="font-bold text-slate-800 mb-3 text-sm flex items-center">
                    <FileText className="w-4 h-4 mr-2 text-blue-600" />
                    Format Header & Kolom Wajib
                 </h5>
                 
                 {/* Format Judul */}
                 <div className="mb-4">
                    <p className="text-xs font-bold text-slate-700 mb-2 uppercase tracking-wide">Format Judul:</p>
                     <code className="block bg-slate-800 text-yellow-400 p-3 rounded font-mono text-sm shadow-inner mb-2">
                       [BUGXXX] - [Modul] - [Judul bug]
                     </code>
                     <p className="text-[10px] text-slate-500 italic">Atau: [BUGXXX] - [Modul] - [TCXX] - [Judul bug]</p>
                 </div>
                 
                 {/* Compact Image Trigger */}
                 <button
                    onClick={() => setPreviewImage('/monday-card-header.png')}
                    className="w-full flex items-center justify-between p-4 bg-white border border-slate-200 rounded-lg shadow-sm hover:bg-slate-50 hover:border-blue-300 transition-all group mb-4"
                 >
                    <div className="flex items-center gap-3">
                        <div className="bg-blue-50 p-2 rounded-md group-hover:bg-blue-100 transition-colors">
                            <ImageIcon className="w-5 h-5 text-blue-600" />
                        </div>
                        <div className="text-left">
                            <span className="block font-semibold text-slate-700 text-sm group-hover:text-blue-700">Lihat Contoh Screenshot Header</span>
                            <span className="block text-[10px] text-slate-500">Pilih Group SIT di Monday.com</span>
                        </div>
                    </div>
                    <div className="bg-slate-100 px-2 py-1 rounded text-[10px] font-medium text-slate-600 flex items-center">
                        <ZoomIn className="w-3 h-3 mr-1" /> Preview
                    </div>
                 </button>

                 {/* Kolom Wajib Grid */}
                 <div className="bg-white p-4 rounded-lg border border-slate-200">
                     <ul className="space-y-3 text-sm">
                       <li className="grid grid-cols-1 sm:grid-cols-[120px_1fr] gap-1 sm:gap-4 border-b border-slate-100 pb-2">
                           <span className="font-bold text-slate-700">Test By:</span> 
                           <span className="text-slate-600">Akun QC Anda</span>
                       </li>
                       <li className="grid grid-cols-1 sm:grid-cols-[120px_1fr] gap-1 sm:gap-4 border-b border-slate-100 pb-2">
                           <span className="font-bold text-slate-700">Assigned To:</span> 
                           <span className="text-slate-600">Pilih <span className="font-bold text-blue-700">SA / PA / BSA</span> terkait</span>
                       </li>
                       <li className="grid grid-cols-1 sm:grid-cols-[120px_1fr] gap-1 sm:gap-4 border-b border-slate-100 pb-2">
                           <span className="font-bold text-slate-700">PIC:</span> 
                           <span className="text-slate-600">Penanggung jawab project</span>
                       </li>
                       <li className="grid grid-cols-1 sm:grid-cols-[120px_1fr] gap-1 sm:gap-4">
                           <span className="font-bold text-slate-700">Developer:</span> 
                           <span className="text-slate-400 italic">Biarkan Kosong (Akan diisi SA)</span>
                       </li>
                     </ul>
                 </div>
              </div>

              {/* BLOCK 2: Comment Section */}
              <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 shadow-sm">
                 <h5 className="font-bold text-slate-800 mb-3 text-sm flex items-center">
                    <List className="w-4 h-4 mr-2 text-blue-600" />
                    Isi Comment / Deskripsi Bug
                 </h5>

                 <button
                    onClick={() => setPreviewImage('/monday-comment-section.png')}
                    className="w-full flex items-center justify-between p-4 bg-white border border-slate-200 rounded-lg shadow-sm hover:bg-slate-50 hover:border-blue-300 transition-all group mb-4"
                 >
                    <div className="flex items-center gap-3">
                        <div className="bg-blue-50 p-2 rounded-md group-hover:bg-blue-100 transition-colors">
                            <ImageIcon className="w-5 h-5 text-blue-600" />
                        </div>
                        <div className="text-left">
                            <span className="block font-semibold text-slate-700 text-sm group-hover:text-blue-700">Lihat Contoh Screenshot Comment</span>
                            <span className="block text-[10px] text-slate-500">Isi penjelasan bug dengan format baku</span>
                        </div>
                    </div>
                    <div className="bg-slate-100 px-2 py-1 rounded text-[10px] font-medium text-slate-600 flex items-center">
                        <ZoomIn className="w-3 h-3 mr-1" /> Preview
                    </div>
                 </button>

                 <div className="bg-blue-50/50 p-4 rounded-lg border border-blue-100">
                    <p className="text-xs font-bold text-blue-800 mb-2 uppercase tracking-wide">Structure Penjelasan:</p>
                    <ul className="space-y-2 text-sm text-slate-700">
                        <li className="flex gap-2"><span className="font-bold text-slate-900 min-w-[70px]">Step:</span> <span>Langkah mereproduksi bug.</span></li>
                        <li className="flex gap-2"><span className="font-bold text-slate-900 min-w-[70px]">Issue:</span> <span>Deskripsi masalah yang ditemukan.</span></li>
                        <li className="flex gap-2"><span className="font-bold text-slate-900 min-w-[70px]">Expected:</span> <span>Seharusnya sistem bagaimana?</span></li>
                        <li className="flex gap-2"><span className="font-bold text-slate-900 min-w-[70px]">Actual:</span> <span>Kenyataannya bagaimana?</span></li>
                        <li className="flex gap-2"><span className="font-bold text-slate-900 min-w-[70px]">Evidence:</span> <span className="text-red-600 font-medium">Link SharePoint</span> (Wajib Foto/Video).</li>
                    </ul>
                 </div>
              </div>

            </div>
          </div>

          {/* Severity Table */}
          <div>
            <h4 className="font-bold text-slate-900 text-lg mb-4 flex items-center border-l-4 border-orange-500 pl-3">
              <AlertTriangle className="w-5 h-5 mr-2 text-orange-500" /> Severity (Dampak Bug SIT)
            </h4>
            <div className="overflow-x-auto rounded-lg border border-slate-200">
              <table className="min-w-full divide-y divide-slate-200 text-xs">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="px-4 py-3 text-left font-bold text-slate-700 w-1/4">Level</th>
                    <th className="px-4 py-3 text-left font-bold text-slate-700">Definisi & Contoh</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-slate-200">
                  <tr>
                    <td className="px-4 py-3 font-bold text-red-600 bg-red-50">MAJOR</td>
                    <td className="px-4 py-3"><strong>Stopper</strong>. Flow tidak bisa lanjut. Contoh: Crash, Login Gagal, Tombol Submit Mati.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-bold text-orange-600 bg-orange-50">MEDIUM</td>
                    <td className="px-4 py-3">Fitur terganggu tapi ada <em>workaround</em>. Contoh: Gagal ganti foto profil, filter lambat.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-bold text-yellow-600 bg-yellow-50">MINOR</td>
                    <td className="px-4 py-3">Gangguan kecil, flow aman. Contoh: Typo label, tooltip tidak muncul.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-bold text-pink-600 bg-pink-50">KOSMETIK</td>
                    <td className="px-4 py-3">Masalah Visual. Contoh: Warna beda desain, logo stretch, padding tidak rata.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-bold text-slate-500 bg-slate-50">NOT BUG</td>
                    <td className="px-4 py-3">Bukan bug / By design. Contoh: Request fitur baru, salah input user.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Priority Table */}
          <div>
            <h4 className="font-bold text-slate-900 text-lg mb-4 flex items-center border-l-4 border-blue-500 pl-3">
               <Clock className="w-5 h-5 mr-2 text-blue-500" /> Priority (Urutan SIT)
            </h4>
            <div className="overflow-x-auto rounded-lg border border-slate-200">
              <table className="min-w-full divide-y divide-slate-200 text-xs">
                <thead className="bg-slate-50">
                  <tr><th className="px-4 py-3 text-left font-bold text-slate-700 w-1/4">Priority</th><th className="px-4 py-3 text-left font-bold text-slate-700">Keterangan</th></tr>
                </thead>
                <tbody className="bg-white divide-y divide-slate-200">
                  <tr><td className="px-4 py-3 font-bold text-red-700 bg-red-50">HIGH</td><td className="px-4 py-3">Wajib dikerjakan paling pertama (Stopper).</td></tr>
                  <tr><td className="px-4 py-3 font-bold text-orange-700 bg-orange-50">MEDIUM</td><td className="px-4 py-3">Dikerjakan setelah bug High selesai.</td></tr>
                  <tr><td className="px-4 py-3 font-bold text-blue-700 bg-blue-50">LOW</td><td className="px-4 py-3">Dikerjakan paling terakhir (Improvement/Minor).</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Status Workflow Table */}
          <div>
             <h4 className="font-bold text-slate-900 text-lg mb-4 flex items-center border-l-4 border-purple-500 pl-3">
               <Tag className="w-5 h-5 text-purple-500 mr-2" /> Status & Workflow (SIT)
             </h4>
             <div className="overflow-x-auto rounded-lg border border-slate-200">
               <table className="min-w-full divide-y divide-slate-200 text-xs">
                 <thead className="bg-slate-50">
                    <tr><th className="px-4 py-3 text-left font-bold text-slate-700 w-1/3">Status</th><th className="px-4 py-3 text-left font-bold text-slate-700">Definisi Kondisi</th></tr>
                 </thead>
                 <tbody className="bg-white divide-y divide-slate-200">
                    <tr><td className="px-4 py-3 font-bold text-slate-600">OPEN</td><td className="px-4 py-3">Bug baru saja dilaporkan oleh QC.</td></tr>
                    <tr><td className="px-4 py-3 font-bold text-blue-600">IN PROGRESS</td><td className="px-4 py-3">Developer sedang memperbaiki kode.</td></tr>
                    <tr><td className="px-4 py-3 font-bold text-indigo-600">TESTING QC</td><td className="px-4 py-3">QC memverifikasi perbaikan di server staging/dev.</td></tr>
                    <tr><td className="px-4 py-3 font-bold text-green-600">CLOSED</td><td className="px-4 py-3">Bug sudah clear, disetujui, dan evidence retest valid.</td></tr>
                    <tr><td className="px-4 py-3 font-bold text-red-600">REJECT</td><td className="px-4 py-3">Ditolak karena bukan bug atau duplikat.</td></tr>
                    <tr><td className="px-4 py-3 font-bold text-purple-600">NEXT PHASE</td><td className="px-4 py-3">Temuan yang akan dikerjakan pada fase berikutnya.</td></tr>
                 </tbody>
               </table>
             </div>
          </div>
        </div>
      ),
      textContent: "Pelaporan Bug SIT (Detail). Standar Pelaporan Monday: Format Judul, Kolom Wajib (Test By, Assign To, PIC, Developer), Struktur Comment (Step, Issue, Expected, Actual, Evidence Link SharePoint). Klasifikasi Severity & Priority. Referensi Status SIT: OPEN, IN PROGRESS, TESTING QC, CLOSED, REJECT, NEXT PHASE."
    },

    // --- UAT PENDAMPINGAN SECTIONS ---
    {
      id: 'uat-prep',
      category: 'UAT_PENDAMPINGAN',
      title: 'Persiapan',
      icon: <ListChecks className="w-5 h-5 text-blue-600" />,
      content: (
        <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
           <ul className="space-y-4 text-sm text-slate-700">
             <li className="flex items-start">
               <div className="bg-white p-1 rounded border border-slate-200 mr-3 mt-0.5"><Server className="w-4 h-4 text-blue-500" /></div>
               <div><span className="font-bold block text-slate-900">1. Environment Check</span>Pastikan environment stabil.</div>
             </li>
             <li className="flex items-start">
               <div className="bg-white p-1 rounded border border-slate-200 mr-3 mt-0.5"><Users className="w-4 h-4 text-emerald-500" /></div>
               <div><span className="font-bold block text-slate-900">2. Data Dummy</span>Siapkan akun login & data dummy.</div>
             </li>
             <li className="flex items-start">
               <div className="bg-white p-1 rounded border border-slate-200 mr-3 mt-0.5"><FileText className="w-4 h-4 text-orange-500" /></div>
               <div><span className="font-bold block text-slate-900">3. Skrip UAT</span>Siapkan skrip (dari SA atau User).</div>
             </li>
           </ul>
        </div>
      ),
      textContent: "Persiapan UAT: Env check, Data dummy, Skrip UAT."
    },
    {
      id: 'uat-exec',
      category: 'UAT_PENDAMPINGAN',
      title: 'Pelaksanaan Testing',
      icon: <Presentation className="w-5 h-5 text-orange-600" />,
      content: (
        <div className="space-y-6 text-sm">
           <div>
              <h4 className="font-bold text-slate-800 mb-3 flex items-center"><MonitorPlay className="w-4 h-4 mr-2 text-indigo-600" /> 1. Navigasi Demo</h4>
              <p className="text-slate-600">QC bertugas <strong>Share Screen</strong> dan menjalankan aplikasi sesuai instruksi User/skrip.</p>
           </div>
           <div>
              <h4 className="font-bold text-slate-800 mb-3 flex items-center"><Bug className="w-4 h-4 mr-2 text-red-600" /> 2. Pencatatan Bug</h4>
              <div className="bg-red-50 p-4 rounded-lg border border-red-100 text-slate-700">
                 QC bertugas input temuan ke Monday.com pada <strong>Group UAT</strong> (karena User tidak akses Monday).
              </div>
           </div>
           <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-lg">
              <h4 className="font-bold text-amber-900 mb-2 flex items-center text-xs uppercase tracking-wider"><UserCog className="w-4 h-4 mr-2" /> Batasan Wewenang QC</h4>
              <p className="text-amber-800 leading-relaxed">QC sebagai perantara. Catat request, lempar ke BA/SA. <strong>DILARANG</strong> menjanjikan fitur atau membuat keputusan sepihak.</p>
           </div>
        </div>
      ),
      textContent: "Pelaksanaan UAT: QC share screen, navigasi demo, input bug ke Group UAT Monday. QC tidak berwenang janji fitur/keputusan."
    },
    {
      id: 'uat-post',
      category: 'UAT_PENDAMPINGAN',
      title: 'Setelah Sesi (Handover)',
      icon: <CheckCircle className="w-5 h-5 text-emerald-600" />,
      content: (
        <div className="bg-white p-5 rounded-lg border border-slate-200 shadow-sm text-sm">
           <ol className="list-decimal list-inside space-y-4 text-slate-700">
             <li className="pl-2"><strong>Rekap File:</strong> Pastikan status Pass/Fail, data, dan evidence lengkap.</li>
             <li className="pl-2"><strong>Rapikan Monday:</strong> Lengkapi card bug agar jelas bagi dev.</li>
             <li className="pl-2"><strong>Handover:</strong> Infokan SA/BA bahwa UAT selesai dan list bug sudah update.</li>
           </ol>
        </div>
      ),
      textContent: "Handover UAT: Rekap file, rapikan Monday, infokan SA/BA."
    },

    // --- UAT MANDIRI SECTIONS ---
    {
        id: 'uat-mandiri-intro',
        category: 'UAT_MANDIRI',
        title: 'Monitoring UAT Mandiri',
        icon: <UserCheck className="w-5 h-5 text-teal-600" />,
        content: (
            <div className="space-y-6 text-sm text-slate-700">
                <div className="bg-teal-50 border border-teal-200 p-4 rounded-lg">
                    <p>User melakukan testing aplikasi secara mandiri tanpa didampingi QC live.</p>
                </div>
                
                {/* FLOW MANDIRI ADDED INSIDE CARD */}
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                    <h5 className="font-bold text-slate-800 mb-4 text-center text-xs uppercase tracking-wider">Alur Monitoring UAT Mandiri</h5>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                        <div className="flex flex-col items-center text-center">
                            <div className="w-10 h-10 rounded-full bg-white border-2 border-slate-300 flex items-center justify-center mb-1 shadow-sm"><FileText className="w-5 h-5 text-slate-600" /></div>
                            <span className="font-bold text-[10px]">1. Persiapan Skrip</span>
                        </div>
                        <ArrowRight className="hidden md:block text-slate-300 w-4 h-4" /><ArrowDown className="md:hidden text-slate-300 w-4 h-4" />
                        <div className="flex flex-col items-center text-center">
                            <div className="w-10 h-10 rounded-full bg-white border-2 border-indigo-300 flex items-center justify-center mb-1 shadow-sm"><User className="w-5 h-5 text-indigo-600" /></div>
                            <span className="font-bold text-[10px]">2. User Testing</span>
                        </div>
                        <ArrowRight className="hidden md:block text-slate-300 w-4 h-4" /><ArrowDown className="md:hidden text-slate-300 w-4 h-4" />
                        <div className="flex flex-col items-center text-center relative">
                            <div className="absolute -top-1 -right-1 bg-blue-600 text-white text-[8px] px-1 rounded-full font-bold">QC</div>
                            <div className="w-10 h-10 rounded-full bg-white border-2 border-blue-300 flex items-center justify-center mb-1 shadow-sm"><ShieldAlert className="w-5 h-5 text-blue-600" /></div>
                            <span className="font-bold text-[10px]">3. QC Verify</span>
                        </div>
                        <ArrowRight className="hidden md:block text-slate-300 w-4 h-4" /><ArrowDown className="md:hidden text-slate-300 w-4 h-4" />
                        <div className="flex flex-col items-center text-center">
                            <div className="w-10 h-10 rounded-full bg-white border-2 border-emerald-300 flex items-center justify-center mb-1 shadow-sm"><RefreshCw className="w-5 h-5 text-emerald-600" /></div>
                            <span className="font-bold text-[10px]">4. Retest & Close</span>
                        </div>
                    </div>
                </div>

                <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm space-y-4">
                    <div className="flex gap-3">
                        <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0 font-bold text-slate-600 text-xs">1</div>
                        <div><h5 className="font-bold text-slate-800">Mempersiapkan Skrip UAT</h5><p className="text-slate-500 mt-1">Mempersiapkan skrip UAT, bisa dari user maupun skrip SIT.</p></div>
                    </div>
                    <div className="flex gap-3">
                        <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0 font-bold text-slate-600 text-xs">2</div>
                        <div><h5 className="font-bold text-slate-800">User Testing</h5><p className="text-slate-500 mt-1">User melakukan testing, mengisi file UAT, dan menginput card bug/request di Monday Group UAT.</p></div>
                    </div>
                    <div className="flex gap-3">
                        <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0 font-bold text-slate-600 text-xs">3</div>
                        <div><h5 className="font-bold text-slate-800">QC Verifikasi (Penting!)</h5><p className="text-slate-500 mt-1">Staff QC memverifikasi ulang setiap card bug dan mengisi data yang kurang lengkap pada skrip UAT.</p></div>
                    </div>
                    <div className="flex gap-3">
                        <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0 font-bold text-slate-600 text-xs">4</div>
                        <div><h5 className="font-bold text-slate-800">Retest & Finalize</h5><p className="text-slate-500 mt-1">Proses fixing oleh dev, retest oleh user, ulangi hingga PASS.</p></div>
                    </div>
                </div>
            </div>
        ),
        textContent: "Monitoring UAT Mandiri. Alur: Persiapan Skrip, User Testing, QC Verifikasi Bug, Retest & Close."
    }
  ];

  const filteredSections = sections.filter(s => s.category === activeSubTab);

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 relative">
       {/* Modal Popups */}
       {showScriptModal && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-900/80 backdrop-blur-sm p-4 animate-fade-in" onClick={() => setShowScriptModal(false)}>
          <div className="bg-white rounded-xl shadow-2xl max-w-5xl w-full max-h-[90vh] flex flex-col overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center p-4 border-b border-slate-200">
               <h3 className="font-bold text-slate-800 flex items-center"><FileSpreadsheet className="w-5 h-5 mr-2 text-green-600" /> Contoh Format Naskah SIT (Excel)</h3>
               <button onClick={() => setShowScriptModal(false)} className="p-1 rounded-full hover:bg-slate-100 transition-colors"><X className="w-6 h-6 text-slate-500" /></button>
            </div>
            <div className="flex-1 overflow-auto bg-slate-100 p-4 flex items-center justify-center"><img src="/example-sit-script.png" alt="Contoh Script SIT" className="max-w-full h-auto object-contain shadow-lg rounded-md" /></div>
          </div>
        </div>
      )}

      {/* Image Preview Modal */}
      {previewImage && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center bg-slate-900/80 backdrop-blur-sm p-4 animate-fade-in" onClick={() => setPreviewImage(null)}>
          <div className="bg-white rounded-xl shadow-2xl max-w-5xl w-full max-h-[90vh] flex flex-col overflow-hidden animate-scale-up" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center p-4 border-b border-slate-200">
               <h3 className="font-bold text-slate-800 flex items-center"><ImageIcon className="w-5 h-5 mr-2 text-blue-600" /> Preview Screenshot</h3>
               <button onClick={() => setPreviewImage(null)} className="p-1 rounded-full hover:bg-slate-100 transition-colors"><X className="w-6 h-6 text-slate-500" /></button>
            </div>
            <div className="flex-1 overflow-auto bg-slate-100 p-4 flex items-center justify-center"><img src={previewImage} alt="Preview" className="max-w-full h-auto object-contain shadow-sm rounded" /></div>
          </div>
        </div>
      )}

      <div className="mb-10 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">Panduan QC</h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-6">Berijalan Technocenter</p>
      </div>
      
      <div className="mb-8 text-center">
             <a href="/Guide_QC(v1).pdf" download className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-xl shadow-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none transition-all transform hover:-translate-y-1"><Download className="w-5 h-5 mr-2" /> Download PDF Guide QC</a>
      </div>

      <div className="bg-slate-200/50 p-1 rounded-xl flex flex-wrap gap-1 mb-6 max-w-2xl mx-auto md:mx-0">
        {['SIT', 'UAT_PENDAMPINGAN', 'UAT_MANDIRI'].map((tab) => (
          <button key={tab} onClick={() => setActiveSubTab(tab as any)} className={`flex-1 min-w-[100px] flex items-center justify-center px-3 py-2.5 rounded-lg text-xs md:text-sm font-bold transition-all ${activeSubTab === tab ? 'bg-white text-indigo-700 shadow-sm' : 'text-slate-500 hover:text-slate-700 hover:bg-slate-200'}`}>{tab.replace('_', ' ')}</button>
        ))}
      </div>

      {/* BANNER FLOW - SIT */}
      {activeSubTab === 'SIT' && (
      <div className="mb-8 rounded-xl bg-white p-6 md:p-8 animate-fade-in shadow-sm border border-slate-100">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 max-w-3xl mx-auto">
                <button onClick={() => scrollToSection('SIT', 'sit-prep')} className="flex flex-col items-center text-center group w-full md:w-auto focus:outline-none">
                    <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mb-3 group-hover:bg-blue-200 transition-all group-hover:scale-110 shadow-sm"><FileText className="w-6 h-6 text-blue-600" /></div>
                    <span className="font-bold text-slate-800 group-hover:text-blue-700">Persiapan</span>
                </button>
                <ArrowRight className="hidden md:block text-slate-300 w-6 h-6" /><ArrowDown className="md:hidden text-slate-300 w-6 h-6" />
                <button onClick={() => scrollToSection('SIT', 'sit-exec')} className="flex flex-col items-center text-center group w-full md:w-auto focus:outline-none">
                    <div className="w-14 h-14 rounded-full bg-cyan-100 flex items-center justify-center mb-3 group-hover:bg-cyan-200 transition-all group-hover:scale-110 shadow-sm"><PlayCircle className="w-6 h-6 text-cyan-600" /></div>
                    <span className="font-bold text-slate-800 group-hover:text-cyan-700">Eksekusi</span>
                </button>
                <ArrowRight className="hidden md:block text-slate-300 w-6 h-6" /><ArrowDown className="md:hidden text-slate-300 w-6 h-6" />
                <button onClick={() => scrollToSection('SIT', 'monday-sit')} className="flex flex-col items-center text-center group w-full md:w-auto focus:outline-none">
                    <div className="w-14 h-14 rounded-full bg-red-100 flex items-center justify-center mb-3 group-hover:bg-red-200 transition-all group-hover:scale-110 shadow-sm"><Bug className="w-6 h-6 text-red-600" /></div>
                    <span className="font-bold text-slate-800 group-hover:text-red-700">Report Bug</span>
                </button>
            </div>
      </div>
      )}

      {/* BANNER FLOW - UAT PENDAMPINGAN */}
      {activeSubTab === 'UAT_PENDAMPINGAN' && (
        <div className="mb-8 animate-fade-in">
             <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-slate-100">
                <div className="text-center max-w-3xl mx-auto mb-8">
                    <h3 className="font-bold text-slate-900 text-lg mb-2">Alur UAT Pendampingan</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                        UAT Pendampingan dilakukan dengan QC sebagai perantara demo untuk User. 
                        Proses ini biasanya dilakukan melalui <strong>Online Meeting</strong>, dihadiri oleh SA dan BA.
                    </p>
                </div>
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 max-w-3xl mx-auto">
                    <button onClick={() => scrollToSection('UAT_PENDAMPINGAN', 'uat-prep')} className="flex flex-col items-center text-center group w-full md:w-auto">
                        <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mb-2 group-hover:scale-110 shadow-sm transition-all"><ListChecks className="w-6 h-6 text-blue-600" /></div>
                        <span className="font-bold text-sm text-slate-800">Persiapan</span>
                    </button>
                    <ArrowRight className="hidden md:block text-slate-300 w-5 h-5" /><ArrowDown className="md:hidden text-slate-300 w-5 h-5" />
                    <button onClick={() => scrollToSection('UAT_PENDAMPINGAN', 'uat-exec')} className="flex flex-col items-center text-center group w-full md:w-auto">
                        <div className="w-14 h-14 rounded-full bg-orange-100 flex items-center justify-center mb-2 group-hover:scale-110 shadow-sm transition-all"><Presentation className="w-6 h-6 text-orange-600" /></div>
                        <span className="font-bold text-sm text-slate-800">Pelaksanaan</span>
                    </button>
                    <ArrowRight className="hidden md:block text-slate-300 w-5 h-5" /><ArrowDown className="md:hidden text-slate-300 w-5 h-5" />
                    <button onClick={() => scrollToSection('UAT_PENDAMPINGAN', 'uat-post')} className="flex flex-col items-center text-center group w-full md:w-auto">
                        <div className="w-14 h-14 rounded-full bg-emerald-100 flex items-center justify-center mb-2 group-hover:scale-110 shadow-sm transition-all"><RefreshCw className="w-6 h-6 text-emerald-600" /></div>
                        <span className="font-bold text-sm text-slate-800">Handover</span>
                    </button>
                </div>
             </div>
        </div>
      )}

      {/* CONTENT LIST */}
      <div className="space-y-6 min-h-[400px]">
        {filteredSections.map((section) => {
            // Jika UAT Mandiri, tampilkan flat tanpa accordion button
            if (activeSubTab === 'UAT_MANDIRI') {
              return (
                <div key={section.id} id={`section-${section.id}`} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden animate-fade-in p-6">
                    <div className="mb-4 flex items-center space-x-4 border-b border-slate-100 pb-4">
                        <div className="p-3 rounded-full border bg-teal-50 border-teal-100">
                           {section.icon}
                        </div>
                        <h3 className="text-xl font-bold text-slate-800">{section.title}</h3>
                    </div>
                    {section.content}
                </div>
              );
            }

            // Default Accordion for other tabs
            return (
              <div key={section.id} id={`section-${section.id}`} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden transition-all hover:shadow-md animate-fade-in">
                <button onClick={() => toggleSection(section.id)} className="w-full px-6 py-5 flex items-center justify-between bg-white focus:outline-none hover:bg-slate-50 transition-colors">
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 rounded-full border ${activeSubTab === 'SIT' ? 'bg-indigo-50 border-indigo-100' : activeSubTab === 'UAT_PENDAMPINGAN' ? 'bg-purple-50 border-purple-100' : 'bg-teal-50 border-teal-100'}`}>{section.icon}</div>
                    <span className="text-lg font-bold text-slate-800 text-left">{section.title}</span>
                  </div>
                  {expandedSection === section.id ? <ChevronUp className="w-5 h-5 text-slate-500" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
                </button>
                {expandedSection === section.id && <div className="px-6 pb-8 pt-2 border-t border-slate-100 bg-white animate-fade-in">{section.content}</div>}
              </div>
            );
        })}
      </div>
    </div>
  );
};