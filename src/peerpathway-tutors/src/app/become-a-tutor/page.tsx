"use client";

import React, { useState } from "react";

type TutorForm = {
  name: string;
  email: string;
  subject: string;
  experience: string;
};

export default function BecomeATutorPage() {
  const [formData, setFormData] = useState<TutorForm>({
    name: "",
    email: "",
    subject: "",
    experience: "",
  });

  const [submissionStatus, setSubmissionStatus] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSubmissionStatus("success");
        setFormData({ name: "", email: "", subject: "", experience: "" });
      } else {
        setSubmissionStatus("error");
      }
    } catch (err) {
      console.error(err);
      setSubmissionStatus("error");
    }
  };

  return (
    <div style={{ maxWidth: "600px", margin: "2rem auto" }}>
      <h1>Become a Tutor</h1>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "1rem" }}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>
        </div>

        <div style={{ marginBottom: "1rem" }}>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
        </div>

        <div style={{ marginBottom: "1rem" }}>
          <label>
            Subject:
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </label>
        </div>

        <div style={{ marginBottom: "1rem" }}>
          <label>
            Experience:
            <textarea
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              required
            />
          </label>
        </div>

        <button type="submit">Submit Application</button>
      </form>

      {submissionStatus === "success" && (
        <p style={{ color: "green" }}>Application submitted successfully!</p>
      )}
      {submissionStatus === "error" && (
        <p style={{ color: "red" }}>Something went wrong. Please try again.</p>
      )}
    </div>
  );
}
