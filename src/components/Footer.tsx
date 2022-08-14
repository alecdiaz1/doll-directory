export const Footer = () => (
  <div id="footer" className="bg-fuchsia-200 mt-16 py-6">
    <div className="container mx-auto sm:mx-auto pl-4">
      <h3 className="text-lg font-bold">Listing Agents</h3>
      <div className="grid">
        <p>Paris Argo - (415) 118-7606</p>
        <p>Niko Rain - (415) 998-8086</p>
        <p>Dominic Bastias - (628) 354-7440</p>
      </div>
    </div>
    <div className="flex justify-center mt-8">
      <p>
        built by&nbsp;
        <span>
          <a href="https://twitch.tv/thisisnotbyte" className="underline">
            thisisnotbyte
          </a>
        </span>
        {/* boba emoji below */}
        &nbsp;for nopixel 🧋
      </p>
    </div>
  </div>
);
