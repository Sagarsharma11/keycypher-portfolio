// import { FiUploadCloud } from "react-icons/fi";
// import styles from "./style.module.css";

// const UploadBox = () => {
//   return (
//     <div className="w-full max-w-xl">
//       <label
//         className={`flex flex-col items-center justify-center w-full h-40 border-2 border-dashed rounded-lg cursor-pointer bg-[#111] hover:bg-[#1a1a1a] transition ${styles.glow}`}
//       >
//         <div className="flex flex-col items-center justify-center pt-5 pb-6">
//           <FiUploadCloud size={32} className="mb-2 text-gray-400" />
//           <p className="mb-1 text-sm text-gray-300">
//             Click to upload or drag & drop
//           </p>
//           <p className="text-xs text-gray-500">ZIP files only</p>
//         </div>
//         <input type="file" accept=".zip" className="hidden" />
//       </label>
//     </div>
//   );
// };

// export default UploadBox;

import { FiUploadCloud } from "react-icons/fi";
import styles from "./style.module.css";

const UploadBox = ({setIsOpen}:any) => {
  return (
    <div className="w-full max-w-xl">
      <div onClick={()=>setIsOpen(true)} className={`rounded-lg ${styles.glow_box}`}>
        <label className="relative z-10 flex flex-col items-center justify-center w-full h-40 border-2 border-dashed border-transparent rounded-lg cursor-pointer transition">
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <FiUploadCloud size={32} className="mb-2 text-gray-400" />
            <p className="mb-1 text-sm text-gray-300">
              Click to upload or drag & drop
            </p>
            <p className="text-xs text-gray-500">ZIP files only</p>
          </div>
          {/* <input type="file" accept=".zip" className="hidden" /> */}
        </label>
      </div>
    </div>
  );
};

export default UploadBox;

