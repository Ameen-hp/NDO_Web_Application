export default function Donate() {
return (
<div className="p-10 bg-white text-center">
<h2 className="text-3xl font-bold text-green-700 mb-4">Support Our Mission</h2>
<p className="max-w-2xl mx-auto mb-6">
Your contribution helps NDO empower women, support education, deliver healthcare, and provide relief
to disaster-affected communities. Every donation makes a difference.
</p>
<img src="/images/donate.jpg" alt="Donate" className="w-full md:w-2/3 mx-auto rounded-lg shadow-lg mb-6" />
<button className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-yellow-500">
Donate Now
</button>
</div>
);
}