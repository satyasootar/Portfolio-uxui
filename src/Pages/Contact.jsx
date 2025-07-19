export const Contact = () => {
    return (
        <div className="p-4 mx-auto max-w-xl bg-transparent">
            <h2 className="text-3xl text-slate-900 font-bold">Contact us</h2>
            <form
                action="https://api.web3forms.com/submit"
                method="POST"
                className="mt-8 space-y-5"
            >
                {/* ✅ REQUIRED Hidden Inputs */}
                <input type="hidden" name="access_key" value="21ce952d-655b-435b-99bc-93ab3ea43224" />
                <input type="hidden" name="subject" value="New Submission from Portfolio Contact" />
                <input type="hidden" name="redirect" value="https://web3forms.com/success" />
                <input type="checkbox" name="botcheck" style={{ display: "none" }} />

                <div>
                    <label className="text-sm text-slate-900 font-medium mb-2 block">Name</label>
                    <input
                        type="text"
                        name="name"
                        required
                        placeholder="Enter Name"
                        className="w-full py-2.5 px-4 text-slate-800 bg-gray-100 border border-gray-400 focus:border-primary-accent focus:bg-transparent text-sm outline-0 transition-all"
                    />
                </div>
                <div>
                    <label className="text-sm text-slate-900 font-medium mb-2 block">Email</label>
                    <input
                        type="email"
                        name="email"
                        required
                        placeholder="Enter Email"
                        className="w-full py-2.5 px-4 text-slate-800 bg-gray-100 border border-gray-400 focus:border-primary-accent focus:bg-transparent text-sm outline-0 transition-all"
                    />
                </div>
                <div>
                    <label className="text-sm text-slate-900 font-medium mb-2 block">Subject</label>
                    <input
                        type="text"
                        name="subject"
                        required
                        placeholder="Enter Subject"
                        className="w-full py-2.5 px-4 text-slate-800 bg-gray-100 border border-gray-400 focus:border-primary-accent focus:bg-transparent text-sm outline-0 transition-all"
                    />
                </div>
                <div>
                    <label className="text-sm text-slate-900 font-medium mb-2 block">Message</label>
                    <textarea
                        name="message"
                        required
                        placeholder="Enter Message"
                        rows="6"
                        className="w-full px-4 text-slate-800 bg-gray-100 border border-gray-400 focus:border-primary-accent focus:bg-transparent text-sm pt-3 outline-0 transition-all"
                    />
                </div>
                <button
                    type="submit"
                    className="text-white bg-black font-medium hover:bg-slate-800 tracking-wide text-sm px-4 py-2.5 w-full border-0 outline-0 cursor-pointer"
                >
                    Send message
                </button>
            </form>
        </div>
    );
};
