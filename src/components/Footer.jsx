import { Typography } from "@material-tailwind/react";
export default function Footer({cls}) {

  return (
    <footer className={`${cls} flex w-full flex-row flex-wrap items-center justify-center border-t border-slate-900 py-6 text-center`}>
      <Typography color="blue-gray" className="font-normal">
        &copy; 2023 Lukasz26671 | Wszystkie prawa zastrzeżone.
      </Typography>
      {/* <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
        <li>
          <Typography
            as="a"
            href="#"
            color="blue-gray"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            About Us
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="#"
            color="blue-gray"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            License
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="#"
            color="blue-gray"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            Contribute
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="#"
            color="blue-gray"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            Contact Us
          </Typography>
        </li>
      </ul> */}
    </footer>
  );
}