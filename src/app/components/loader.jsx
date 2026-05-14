"use client";

export default function Loader() {
  return (
    <div className="flex justify-center items-center">
      <div className="loader"></div>

      <style jsx>{`
        .loader {
          width: 50px;
          aspect-ratio: 1;
          border-radius: 50%;
          border: 8px solid transparent;
          border-right-color: #ffffff;
          position: relative;
          animation: l24 1s infinite linear;
        }

        .loader::before,
        .loader::after {
          content: "";
          position: absolute;
          inset: -8px;
          border-radius: 50%;
          border: inherit;
          animation: inherit;
          animation-duration: 2s;
        }

        .loader::after {
          animation-duration: 4s;
        }

        @keyframes l24 {
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}