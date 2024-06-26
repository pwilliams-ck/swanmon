import { Board } from '@prisma/client';
import { BoardTitleForm } from './board-title-form';
import { BoardOptions } from './board-options';

type BoardNavbarProps = {
  data: Board;
};

export const BoardNavbar = async ({ data }: BoardNavbarProps) => {
  return (
    <div className="w-full h-16 z-[40] bg-black/50 fixed top-14 flex items-center px-6 gap-4 text-white">
      <BoardTitleForm data={data} />
      <div className="ml-auto">
        <BoardOptions id={data.id} />
      </div>
    </div>
  );
};
