import { SimpleTooltip } from "@/components/ui/tooltip";
import { USER } from "@/features/profile/data/user";
import { cn } from "@/lib/utils";
// import { FlipSentences } from "@/registry/flip-sentences";i
import { FlipSentences } from "./flip-sentances";
// import { PronounceMyName } from "./pronounce-my-name";
import { VerifiedIcon } from "./verified-icon";

export function ProfileHeader() {
  return (
    <div className="screen-line-after flex border-x border-edge">
      <div className="shrink-0 border-r border-edge">
        <div className="mx-[2px] my-[3px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="size-32 rounded-full ring-1 ring-border ring-offset-2 ring-offset-background select-none sm:size-40"
            alt={`${USER.displayName}'s avatar`}
            src={USER.avatar}
            fetchPriority="high"
          />
        </div>

        <SimpleTooltip content="I'm from India">
          {/* Flag of Viet Nam */}

          <svg
            className="absolute top-0 -left-px h-8 sm:h-9"
            viewBox="0 0 30 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Saffron */}
            <rect width="30" height="6.66" y="0" fill="#FF9933" />

            {/* White */}
            <rect width="30" height="6.66" y="6.66" fill="#FFFFFF" />

            {/* Green */}
            <rect width="30" height="6.66" y="13.32" fill="#138808" />

            {/* Ashoka Chakra (simplified) */}
            <circle cx="15" cy="10" r="2" stroke="#000080" strokeWidth="0.5" fill="none" />
            {[...Array(24)].map((_, i) => {
              const angle = (i * 15) * (Math.PI / 180);
              const x1 = 15;
              const y1 = 10;
              const x2 = 15 + Math.cos(angle) * 2;
              const y2 = 10 + Math.sin(angle) * 2;
              return (
                <line
                  key={i}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke="#000080"
                  strokeWidth="0.2"
                />
              );
            })}
          </svg>





          {/* <svg
            className="absolute top-0 -left-px h-8 sm:h-9"
            viewBox="0 0 30 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="30" height="20" fill="#F00" />
            <polygon
              points="15,4 11.47,14.85 20.71,8.15 9.29,8.15 18.53,14.85"
              fill="#FFEB00"
            />
          </svg> */}
        </SimpleTooltip>
      </div>

      <div className="flex flex-1 flex-col">
        <div
          className={cn(
            "flex grow items-end pb-1 pl-4",
            "bg-[repeating-linear-gradient(315deg,var(--pattern-foreground)_0,var(--pattern-foreground)_1px,transparent_0,transparent_50%)] bg-size-[10px_10px] [--pattern-foreground:var(--color-edge)]/56"
          )}
        >
          <div className="line-clamp-1 font-mono text-xs text-zinc-300 select-none max-sm:hidden dark:text-zinc-800">
            {"text-3xl "}
            <span className="inline dark:hidden">text-zinc-950</span>
            <span className="hidden dark:inline">text-zinc-50</span>
            {" font-medium"}
          </div>
        </div>

        <div className="border-t border-edge">
          <h1 className="flex items-center pl-4 text-3xl font-semibold">
            {USER.displayName}
            &nbsp;
            <SimpleTooltip content="Verified">
              <VerifiedIcon className="size-[0.6em] translate-y-px text-info select-none" />
            </SimpleTooltip>
            
          </h1>

          <div className="h-12 border-t border-edge py-1 pl-4 sm:h-auto">
            <FlipSentences sentences={USER.flipSentences} />
          </div>
        </div>
      </div>
    </div>
  );
}
