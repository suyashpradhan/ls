import { BsHeart } from "react-icons/bs";

export default function PostCard() {
  return (
    <>
      <section class="flex items-center font-default justify-center px-4 mb-8 ">
        <div class="bg-white md:w-3/3 lg:w-2/3 rounded-lg shadow-lg p-8">
          <p class="text-secondary tracking-normal text-md">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
            necessitatibus consequatur beatae eaque illum eligendi autem id nam
            ab ipsam cupiditate ipsa mollitia ducimus deserunt cum
            exercitationem enim est, impedit delectus maxime. Beatae optio atque
            quod commodi fugit obcaecati. Distinctio maxime quis ipsa qui labore
            tempore soluta quo dolorum ipsam eligendi molestias voluptate
            consequatur neque dolore pariatur quibusdam tenetur, repellat nobis
            deleniti quas? Laudantium assumenda alias error explicabo voluptates
            voluptas fugit, neque deserunt consequuntur itaque? Nobis sapiente
            rerum facilis placeat omnis, voluptatum et dolor, eligendi qui,
            molestias doloribus. Asperiores nostrum aspernatur quisquam, numquam
          </p>
          <div class="mt-2">
            <BsHeart className="mt-8 w-6 h-6 text-danger cursor-pointer " />
            <p className="mt-2 font-semibold text-secondary">0 Like(s)</p>
          </div>
        </div>
      </section>
    </>
  );
}
