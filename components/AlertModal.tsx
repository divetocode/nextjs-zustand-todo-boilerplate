"use client";

import { useEffect, useState } from "react";
import ConfirmButton from "./ConfirmButton";

type AlertModalProps = {
  open: boolean;
  message: string;
  onClose: () => void;
};

export default function AlertModal({ open, message, onClose }: AlertModalProps) {
  const [show, setShow] = useState(false);

  // 트랜지션용 상태 제어
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (open) {
      setShow(true);
    } else {
      timer = setTimeout(() => setShow(false), 300); // 트랜지션 후 제거
    }
    return () => clearTimeout(timer);
  }, [open]);

  if (!open && !show) return null;

  return (
    <div
      className={`fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 transition-opacity duration-300 ${
        open ? "opacity-100" : "opacity-0"
      }`}
      onClick={onClose} // 배경 클릭 시 닫기
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`bg-white rounded-xl shadow-xl w-full max-w-md p-8 text-center space-y-6 transform transition-all duration-300
        ${open ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
      >
        <h2 className="text-xl font-bold text-gray-800">❗ 알림</h2>
        <p className="text-gray-700 text-base">{message}</p>

        <ConfirmButton onClick={onClose}>
          확인했어요
        </ConfirmButton>
      </div>
    </div>
  );
}
