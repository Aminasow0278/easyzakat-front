function CollectionChart() {
  return (
    <div className="relative h-[165px] w-full">
      <svg
        viewBox="0 0 700 220"
        className="h-full w-full"
        preserveAspectRatio="none"
      >
        <path
          d="M 20 165 C 90 158, 120 150, 175 154 C 225 158, 270 147, 320 150 C 375 153, 415 142, 465 145 C 525 148, 570 130, 625 128 C 650 127, 665 126, 680 124"
          fill="none"
          stroke="#d7d7d7"
          strokeWidth="2"
          strokeDasharray="4 5"
        />

        <path
          d="M 20 160 C 80 150, 120 138, 170 125 C 210 114, 235 103, 275 102 C 320 100, 350 110, 390 105 C 430 101, 455 90, 490 75 C 530 59, 565 47, 610 50 C 635 52, 658 57, 680 55"
          fill="none"
          stroke="#315d52"
          strokeWidth="3"
          strokeLinecap="round"
        />

        <circle cx="20" cy="160" r="3" fill="#315d52" />
        <circle cx="170" cy="125" r="3" fill="#315d52" />
        <circle cx="275" cy="102" r="3" fill="#315d52" />
        <circle cx="390" cy="105" r="3" fill="#315d52" />
        <circle cx="490" cy="75" r="3" fill="#315d52" />
        <circle cx="610" cy="50" r="3" fill="#315d52" />
        <circle cx="680" cy="55" r="3" fill="#315d52" />
      </svg>

      <div className="absolute bottom-0 left-0 right-0 flex justify-between px-1 text-[7px] text-[#999]">
        <span>Jan</span>
        <span>Mar</span>
        <span>May</span>
        <span>Jul</span>
        <span>Sep</span>
        <span>Nov</span>
      </div>
    </div>
  );
}

export default CollectionChart;