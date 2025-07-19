export const CaseStudyCard = ({
    title,
    projectImages = [],
    tags = [],
    role = "Developer",
    duration = "2025 Summer",
    status = "Draft",
    link
}) => {

    const statusColorMap = {
        "Live Project": "bg-green-100 text-green-700 border-green-400",
        "In Progress": "bg-yellow-100 text-yellow-700 border-yellow-400",
        "Design Phase": "bg-blue-100 text-blue-700 border-blue-400",
        "Completed": "bg-emerald-100 text-emerald-700 border-emerald-400",
        "Draft": "bg-gray-200 text-gray-700 border-gray-300",
        "Archived": "bg-red-100 text-red-700 border-red-400"
    };

    const statusClasses =
        statusColorMap[status] || "bg-neutral-200 text-neutral-600 border-neutral-400";

    return (
        <div className="card w-full max-w-lg space-y-4 cursor-none py-3" onClick={() => window.open(link, "_blank")}>
            {/* Image */}
            <div className="w-full overflow-hidden border-2 rounded-sm hover:border-blue-400 relative">
                {projectImages.length > 0 && (
                    <img
                        src={projectImages[0]}
                        alt={title}
                        className="w-full h-auto object-cover hover:scale-105 transition-transform duration-200 ease-in"
                    />
                )}
                <div
                    className={`absolute top-2 right-3 text-xs py-1 px-3 rounded-full border backdrop-blur-md font-medium ${statusClasses}`}
                >
                    {status}
                </div>
            </div>

            {/* Content */}
            <div className="space-y-2">
                <p className="text-[1.3rem] font-semibold text-primary-text leading-snug">
                    {title}
                </p>
                <p className="text-sm text-zinc-600">
                    {role}, {duration}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-1">
                    {tags.map((tag, index) => (
                        <span
                            key={index}
                            className="inline-block text-xs font-medium px-4 py-2 bg-transparent rounded-sm text-gray-800 border border-zinc-400"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};
