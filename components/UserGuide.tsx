import React, { useState } from 'react';
import { Search, ChevronDown, ChevronUp, FileSpreadsheet, AlertCircle, CheckCircle, Upload, List, AlertTriangle, Clock, Tag, Server, UserCheck, PauseCircle, Download } from 'lucide-react';

interface GuideSectionItem {
  id: string;
  title: string;
  icon: React.ReactNode;
  content: React.ReactNode;
  textContent: string; // Added for full-text search
}

export const UserGuide: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedSection, setExpandedSection] = useState<string | null>('intro');

  const toggleSection = (id: string) => {
    setExpandedSection(expandedSection === id ? null : id);
  };

  const sections: GuideSectionItem[] = [
    {
      id: 'intro',
      title: 'Pendahuluan UAT',
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
      title: 'Eksekusi & Pengisian Skrip',
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
      title: 'Pelaporan Bug (Detail)',
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

          {/* Section 3: Priority */}
          <div>
            <h4 className="font-bold text-slate-900 text-lg mb-4 flex items-center border-l-4 border-blue-500 pl-3">
               <Clock className="w-5 h-5 mr-2 text-blue-500" />
               Priority (Prioritas Pengerjaan)
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
               <div className="bg-red-50 border border-red-200 p-4 rounded-lg text-center">
                  <span className="block font-bold text-red-700 text-lg mb-1">HIGH</span>
                  <p className="text-xs text-red-600">Prioritas tinggi, diutamakan untuk dikerjakan terlebih dahulu.</p>
               </div>
               <div className="bg-orange-50 border border-orange-200 p-4 rounded-lg text-center">
                  <span className="block font-bold text-orange-700 text-lg mb-1">MEDIUM</span>
                  <p className="text-xs text-orange-600">Prioritas menengah, dapat dikerjakan setelah bug priority high.</p>
               </div>
               <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg text-center">
                  <span className="block font-bold text-blue-700 text-lg mb-1">LOW</span>
                  <p className="text-xs text-blue-600">Prioritas terakhir, dapat dikerjakan setelah MEDIUM dan HIGH.</p>
               </div>
            </div>
          </div>
        </div>
      ),
      textContent: "Pelaporan Bug (Detail). Langkah Pelaporan di Monday.com. Format Judul Wajib: [BUGXXX] - [Modul] - [Judul Bug]. Kolom Wajib Diisi: Test By, Assigned To (SA/BA/PSA), Developer (Kosongkan). Isi Comment / Deskripsi: Step, Issue, Expected, Actual, Evidence. Klasifikasi Severity (Dampak Bug): MAJOR (Stopper), MEDIUM (Workaround exists), MINOR (Gangguan kecil), KOSMETIK (Visual saja), NOT BUG, NICE TO HAVE, MUST TO HAVE. Priority (Prioritas Pengerjaan): HIGH (Dikerjakan dulu), MEDIUM (Setelah High), LOW (Terakhir)."
    },
    {
      id: 'status-workflow',
      title: 'Status & Workflow Bug',
      icon: <Tag className="w-5 h-5 text-purple-500" />,
      content: (
        <div className="space-y-8 text-sm">
          <p className="text-slate-600 bg-purple-50 p-4 rounded-lg border border-purple-100">
            Berikut adalah penjelasan lengkap mengenai berbagai status yang ada di Monday.com. 
            Memahami status ini sangat penting agar komunikasi antara User, QC, dan Developer berjalan lancar.
          </p>
          
          <div className="grid grid-cols-1 gap-6">
             
             {/* 1. Status Pengerjaan */}
             <div className="border border-slate-200 rounded-lg overflow-hidden shadow-sm">
                <div className="bg-slate-800 px-4 py-3 font-bold text-white flex items-center">
                  <span className="bg-slate-600 rounded-full w-6 h-6 flex items-center justify-center text-xs mr-2">1</span>
                  Status Pengerjaan (Workflow Utama)
                </div>
                <div className="p-5 space-y-4 bg-white">
                   <div className="flex flex-col sm:flex-row sm:items-start">
                      <span className="bg-slate-200 text-slate-700 px-3 py-1 rounded-full text-xs font-bold min-w-[110px] text-center mb-1 sm:mb-0 sm:mr-4">OPEN</span>
                      <p className="text-slate-700">Bug baru saja dilaporkan dan <strong>belum mulai dikerjakan</strong> oleh developer. Biasanya masih menunggu giliran atau assignment.</p>
                   </div>
                   <div className="flex flex-col sm:flex-row sm:items-start">
                      <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-bold min-w-[110px] text-center mb-1 sm:mb-0 sm:mr-4">IN PROGRESS</span>
                      <p className="text-slate-700">Developer sedang dalam proses memperbaiki bug (Coding/Fixing). User harap menunggu.</p>
                   </div>
                   <div className="flex flex-col sm:flex-row sm:items-start">
                      <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-xs font-bold min-w-[110px] text-center mb-1 sm:mb-0 sm:mr-4">REOPEN</span>
                      <p className="text-slate-700">Bug yang sebelumnya dinyatakan selesai, tapi <strong>muncul kembali</strong> saat ditest ulang.</p>
                   </div>
                   <div className="flex flex-col sm:flex-row sm:items-start">
                      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold min-w-[110px] text-center mb-1 sm:mb-0 sm:mr-4">CLOSED</span>
                      <p className="text-slate-700">Bug sudah 100% clear/fixed dan testing sudah lulus. Tidak perlu tindakan lebih lanjut.</p>
                   </div>
                </div>
             </div>

             {/* 2. Status Pengujian */}
             <div className="border border-blue-200 rounded-lg overflow-hidden shadow-sm">
                <div className="bg-blue-600 px-4 py-3 font-bold text-white flex items-center">
                  <UserCheck className="w-5 h-5 mr-2" />
                  Status Pengujian (Testing Phase)
                </div>
                <div className="p-5 space-y-4 bg-white">
                   <div className="flex flex-col sm:flex-row sm:items-start">
                      <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-xs font-bold min-w-[120px] text-center mb-1 sm:mb-0 sm:mr-4">TESTING QC</span>
                      <p className="text-slate-700">Developer sudah selesai fixing. Saatnya <strong>QC Internal</strong> memverifikasi apakah bug benar-benar hilang sebelum diserahkan ke User.</p>
                   </div>
                   <div className="flex flex-col sm:flex-row sm:items-start">
                      <span className="bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-xs font-bold min-w-[120px] text-center mb-1 sm:mb-0 sm:mr-4">TESTING USER</span>
                      <p className="text-slate-700">QC sudah memverifikasi fix (QC Pass). Sekarang giliran <strong>User</strong> untuk melakukan validasi akhir (UAT) di environment terkait.</p>
                   </div>
                   <div className="flex flex-col sm:flex-row sm:items-start">
                      <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-bold min-w-[120px] text-center mb-1 sm:mb-0 sm:mr-4">TESTING VENDOR</span>
                      <p className="text-slate-700">Pengecekan khusus yang dilakukan oleh pihak ketiga (3rd Party) atau Vendor eksternal.</p>
                   </div>
                </div>
             </div>

             {/* 3. Status Teknis */}
             <div className="border border-slate-300 rounded-lg overflow-hidden shadow-sm">
                <div className="bg-slate-600 px-4 py-3 font-bold text-white flex items-center">
                  <Server className="w-5 h-5 mr-2" />
                  Status Teknis & Deployment
                </div>
                <div className="p-5 space-y-4 bg-slate-50">
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                         <strong className="block text-slate-800 mb-1">Development Server</strong>
                         <ul className="space-y-2 text-sm">
                            <li className="flex items-start"><span className="font-mono bg-white border px-1 rounded mr-2 text-xs">MERGE TO DEV</span> Kode sedang digabungkan ke server Development.</li>
                            <li className="flex items-start"><span className="font-mono bg-white border px-1 rounded mr-2 text-xs">DONE DEV</span> Fixing selesai & berjalan di server Development.</li>
                         </ul>
                      </div>
                      <div>
                         <strong className="block text-slate-800 mb-1">Staging Server</strong>
                         <ul className="space-y-2 text-sm">
                            <li className="flex items-start"><span className="font-mono bg-white border px-1 rounded mr-2 text-xs">MERGE TO STG</span> Kode sedang digabungkan ke server Staging.</li>
                            <li className="flex items-start"><span className="font-mono bg-white border px-1 rounded mr-2 text-xs">DONE STG</span> Fixing selesai & berjalan di server Staging.</li>
                         </ul>
                      </div>
                   </div>
                </div>
             </div>

             {/* 4. Status Penundaan */}
             <div className="border border-orange-200 rounded-lg overflow-hidden shadow-sm">
                <div className="bg-orange-500 px-4 py-3 font-bold text-white flex items-center">
                  <PauseCircle className="w-5 h-5 mr-2" />
                  Status Penundaan & Validasi
                </div>
                <div className="p-5 space-y-3 bg-white">
                   <div className="space-y-3">
                      <div className="flex items-start p-2 hover:bg-orange-50 rounded transition-colors">
                         <span className="w-3 h-3 rounded-full bg-orange-400 mt-1.5 mr-3 flex-shrink-0"></span>
                         <div>
                            <strong className="text-slate-800 block">PENDING</strong>
                            <span className="text-slate-600 text-sm">Pengerjaan tertunda karena <strong>menunggu info tambahan</strong> dari user/bisnis.</span>
                         </div>
                      </div>
                      <div className="flex items-start p-2 hover:bg-slate-50 rounded transition-colors">
                         <span className="w-3 h-3 rounded-full bg-slate-400 mt-1.5 mr-3 flex-shrink-0"></span>
                         <div>
                            <strong className="text-slate-800 block">HOLD</strong>
                            <span className="text-slate-600 text-sm">Sengaja ditahan atau di-pause. Biasanya karena prioritas rendah atau menunggu keputusan manajemen.</span>
                         </div>
                      </div>
                      <div className="flex items-start p-2 hover:bg-red-50 rounded transition-colors">
                         <span className="w-3 h-3 rounded-full bg-red-500 mt-1.5 mr-3 flex-shrink-0"></span>
                         <div>
                            <strong className="text-slate-800 block">REJECT</strong>
                            <span className="text-slate-600 text-sm">Bug ditolak. Alasannya bisa karena itu <strong>Bukan Bug</strong> (memang fitur seperti itu) atau tidak akan diperbaiki.</span>
                         </div>
                      </div>
                      <div className="flex items-start p-2 hover:bg-purple-50 rounded transition-colors">
                         <span className="w-3 h-3 rounded-full bg-purple-400 mt-1.5 mr-3 flex-shrink-0"></span>
                         <div>
                            <strong className="text-slate-800 block">DUPLICATE</strong>
                            <span className="text-slate-600 text-sm">Bug yang sama persis sudah pernah dilaporkan di card lain.</span>
                         </div>
                      </div>
                      <div className="flex items-start p-2 hover:bg-teal-50 rounded transition-colors">
                         <span className="w-3 h-3 rounded-full bg-teal-400 mt-1.5 mr-3 flex-shrink-0"></span>
                         <div>
                            <strong className="text-slate-800 block">NEED CONFIRM</strong>
                            <span className="text-slate-600 text-sm">Butuh konfirmasi atau diskusi lebih lanjut sebelum diputuskan.</span>
                         </div>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      ),
      textContent: "Status & Workflow Bug. Workflow Utama: OPEN (Baru), IN PROGRESS (Sedang dikerjakan), REOPEN (Muncul lagi), CLOSED (Sudah clear). Status Pengujian: TESTING QC (Verifikasi Internal), TESTING USER (Validasi User), TESTING VENDOR (Pihak Ketiga). Status Teknis: MERGE TO DEV, DONE DEV, MERGE TO STG, DONE STG. Status Penundaan & Validasi: PENDING (Tunggu info), HOLD (Ditahan/Pause), REJECT (Ditolak), DUPLICATE (Sudah ada), NEED CONFIRM (Butuh konfirmasi)."
    },
    {
      id: 'closure',
      title: 'Penyelesaian & Evidence',
      icon: <Upload className="w-5 h-5 text-indigo-500" />,
      content: (
        <div className="space-y-4 text-sm">
          <p>Jika bug sudah diperbaiki developer (Status: <strong>Done Dev/Stg</strong> atau <strong>Testing User</strong>), lakukan Retest segera.</p>
          <div className="grid grid-cols-1 gap-3">
             <div className="flex items-center p-4 bg-green-50 border border-green-200 rounded-lg shadow-sm">
                <CheckCircle className="w-6 h-6 text-green-600 mr-4" />
                <div>
                  <span className="font-bold text-green-800 block text-base">Jika Hasil Retest SUKSES (Fixed)</span>
                  <p className="text-green-700 mt-1">
                    1. Ubah last status Excel jadi <strong>PASS</strong>.<br/>
                    2. Ubah status Monday jadi <strong>CLOSED</strong>.<br/>
                    3. Tambah komen: <code className="bg-white px-1 rounded">[CLOSED] DD/MM/YYYY - Evidence</code>
                  </p>
                </div>
             </div>
             <div className="flex items-center p-4 bg-red-50 border border-red-200 rounded-lg shadow-sm">
                <AlertTriangle className="w-6 h-6 text-red-600 mr-4" />
                <div>
                  <span className="font-bold text-red-800 block text-base">Jika Masih Ada Bug</span>
                  <p className="text-red-700 mt-1">
                    1. Ubah status Monday jadi <strong>REOPEN</strong>.<br/>
                    2. Berikan komen detail kenapa masih gagal.
                  </p>
                </div>
             </div>
          </div>
        </div>
      ),
      textContent: "Penyelesaian & Evidence. Jika bug sudah diperbaiki developer (Status: Done Dev/Stg), lakukan Retest segera. Jika Hasil Retest SUKSES (Fixed): Ubah last status Excel jadi PASS, Ubah status Monday jadi CLOSED, Tambah komen [CLOSED] DD/MM/YYYY - Evidence. Jika Masih Ada Bug: Ubah status Monday jadi REOPEN, Berikan komen detail."
    }
  ];

  const filteredSections = sections.filter(s => 
    s.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    s.textContent.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <div className="mb-10 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">Panduan User UAT</h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-6">
          Panduan lengkap dan mendetail untuk User dalam melakukan validasi aplikasi secara mandiri.
        </p>
        
        {/* DOWNLOAD BUTTON ADDED HERE */}
        <div className="flex justify-center">
          <a 
            href="/public/Guide_User.pdf" 
            download 
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all transform hover:-translate-y-1"
          >
            <Download className="w-5 h-5 mr-2" />
            Download PDF Guide User
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
          placeholder="Cari panduan (contoh: severity, priority, format bug)..."
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