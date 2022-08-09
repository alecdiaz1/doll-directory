export const Footer = () => (
  <div id="footer" className="bg-fuchsia-200 mt-16 py-6">
    <div className="container mx-auto sm:mx-auto ml-4">
      <h3 className="text-lg font-bold">Listing Agents</h3>
      <div className="grid">
        {/* TODO: Add  real phone numbers*/}
        <p>Paris Argo - (123) 456-7890</p>
        <p>Niko Rain - (123) 456-7890</p>
        <p>Dominic Bastias - (123) 456-7890</p>
      </div>
    </div>
    <div className="flex justify-center mt-8">
      <p>built by&nbsp;
        <span>
        <a href="https://twitch.tv/thisisnotbyte" className="underline">thisisnotbyte</a>
      </span>
        {/* boba emoji below */}
        &nbsp;for nopixel 🧋
      </p>
    </div>
  </div>
)
