const user = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
  imageSize: 90,
};

export default function Profile() {
  return (
    <>
      <h1>{user.firstName.lastName}</h1>
      <p>He is {user.age} old</p>
      <img
        className="Avatar"
        src="{user.imageUrl}"
        alt={`photo of ` + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize,
        }}
      />
    </>
  );
}
