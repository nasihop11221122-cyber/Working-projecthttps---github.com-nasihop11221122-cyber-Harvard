
import React, { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import HeroCarousel from "../components/common/Carousel";
import api from "../services/api";

export default function ProjectDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProjectData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    async function getProjectData() {
      if (!id) return;

      setLoading(true);
      setError("");

      try {
        const { data } = await api.get(`/projects/${id}`, {
          signal: controller.signal,
        });

        setProjectData(data?.data || null);
      } catch (err) {
        if (err.name !== "CanceledError" && err.name !== "AbortError") {
          setError(err?.response?.data?.message || err?.message || "Project not found.");
          setProjectData(null);
        }
      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    }

    getProjectData();

    return () => controller.abort();
  }, [id]);

  const features = useMemo(() => {
    if (Array.isArray(project?.Features)) return project.Features;
    if (Array.isArray(project?.features)) return project.features;
    return [];
  }, [project]);

  const carouselData = useMemo(() => {
    if (!project) return [];

    const thumbnailUrl = project?.thumbnail?.url || project?.thumbnailImage || "";
    const screenshots = Array.isArray(project?.screenshots) ? project.screenshots : [];

    const slides = screenshots
      .map((item) => (typeof item === "string" ? item : item?.url))
      .filter(Boolean)
      .map((url) => ({
        image: url,
        title: project?.category || undefined,
        subtitle: project?.name || undefined,
      }));

    if (thumbnailUrl) {
      slides.unshift({
        image: thumbnailUrl,
        title: project?.name || undefined,
        subtitle: project?.category || undefined,
      });
    }

    return slides;
  }, [project]);

  const meta = useMemo(
    () => [
      { label: "Year", value: project?.year || "2026" },
      { label: "Category", value: project?.category || "-" },
      { label: "Features", value: `${features.length} Modules` },
      { label: "Status", value: project?.status || "Completed" },
    ],
    [features.length, project]
  );

  if (loading) {
    return (
      <div
        className="min-h-screen flex flex-col items-center justify-center gap-3 px-6"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        <div className="w-9 h-9 rounded-full border-2 border-gray-200 border-t-indigo-600 animate-spin" />
        <p className="text-gray-500 text-sm">Loading project...</p>
      </div>
    );
  }

  if (!project) {
    return (
      <div
        className="min-h-screen flex flex-col items-center justify-center gap-4 px-6"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        <p className="text-[7rem] font-black text-gray-100 leading-none select-none">404</p>
        <p className="text-gray-500 text-lg font-semibold">Project not found</p>
        <p className="text-gray-400 text-sm">
          {error || (id ? `No project with id "${id}"` : "No id in URL.")}
        </p>
        <button
          onClick={() => navigate(-1)}
          className="mt-4 text-sm font-semibold text-indigo-600 hover:text-indigo-800 transition-colors"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen bg-white pt-20"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@700;800&family=Inter:wght@300;400;500;600&display=swap');
      `}</style>

      <main className="max-w-6xl mx-auto px-6 sm:px-10">
        {carouselData.length > 0 && (
          <section className="pt-10 pb-14">
            <HeroCarousel data={carouselData} />
          </section>
        )}

        <section className="pb-16 border-b border-gray-100">
          {project?.category && (
            <div className="mb-6">
              <span
                className="text-xs font-medium text-gray-600 border border-gray-300 px-4 py-1.5 rounded-full"
                style={{ letterSpacing: "0.03em" }}
              >
                {project.category}
              </span>
            </div>
          )}

          <h1
            className="text-gray-900 leading-none tracking-tighter mb-8"
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2.8rem, 8vw, 7rem)",
              textTransform: "uppercase",
              letterSpacing: "-0.02em",
            }}
          >
            {project?.name || "Untitled Project"}
          </h1>

          {project?.description && (
            <p
              className="text-gray-500 mb-14 max-w-2xl"
              style={{
                fontSize: "15px",
                lineHeight: "1.75",
                fontWeight: 300,
              }}
            >
              {project.description}
            </p>
          )}

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-8 gap-x-4">
            {meta.map(({ label, value }) => (
              <div key={label}>
                <p
                  className="text-gray-400 mb-1.5"
                  style={{ fontSize: "13px", fontWeight: 400 }}
                >
                  {label} :
                </p>
                <p
                  className="font-semibold"
                  style={{ fontSize: "15px", color: "#4f46e5" }}
                >
                  {value}
                </p>
              </div>
            ))}
          </div>

          {project?.href && (
            <a
              href={project.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex mt-10 text-sm font-semibold text-indigo-600 hover:text-indigo-800 transition-colors"
            >
              Visit Project
            </a>
          )}
        </section>

        {features.length > 0 && (
          <section className="pt-4 pb-24">
            {features.map((feat, i) => (
              <div key={feat?._id || `${feat?.title || "feature"}-${i}`}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-12 items-start py-10">
                  <div className="flex items-center gap-5">
                    <span
                      className="flex-shrink-0 flex items-center justify-center w-11 h-11 rounded-full bg-gray-900 text-white text-sm font-bold"
                      style={{ fontFamily: "'Inter', sans-serif", letterSpacing: "0.02em" }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    <h3
                      className="text-gray-900"
                      style={{
                        fontSize: "clamp(1.1rem, 2.2vw, 1.45rem)",
                        fontWeight: 600,
                        letterSpacing: "-0.01em",
                        lineHeight: 1.2,
                      }}
                    >
                      {feat?.title || "Untitled Feature"}
                    </h3>
                  </div>

                  {feat?.caption && (
                    <p
                      className="text-gray-500"
                      style={{
                        fontSize: "14.5px",
                        lineHeight: "1.8",
                        fontWeight: 300,
                      }}
                    >
                      {feat.caption}
                    </p>
                  )}
                </div>

                {i < features.length - 1 && <div className="w-full h-px bg-gray-100" />}
              </div>
            ))}
          </section>
        )}
      </main>
    </div>
  );
}
