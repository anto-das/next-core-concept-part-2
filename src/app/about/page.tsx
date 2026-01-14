const AboutPage = async () => {
  await new Promise((resolve) => setTimeout(resolve, 4000));
  throw new Error("something wrong..!");
  
  return (
    <div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam perspiciatis
      reiciendis iure id et illum. Culpa ut voluptatibus asperiores ratione
      adipisci consequatur ullam aliquam velit commodi assumenda omnis quia in
      quis quidem, deleniti odit?
    </div>
  );
};

export default AboutPage;
