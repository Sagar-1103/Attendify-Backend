import mongoose, { Schema } from "mongoose";

const detailSchema = new Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
  semester: {
    type: Number,
    required: true,
    min: 1,
  },
  currentCGPA: {
    type: Number,
    required: true,
    min: 0,
    max: 10,
  },
  academicYear: {
    type: String,
    required: true,
  },
  dateOfBirth: {
    type: Date,
    required: true,
  },
  gender: {
    type: String,
    enum: ["Male", "Female", "Other"],
    required: true,
  },
  contactDetails: {
    contactNumber: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },
    address: {
      type: String,
      required: true,
    },
  },
  currentCourses: [
    {
      courseName: {
        type: String,
        required: true,
      },
      department: {
        type: String,
        required: true,
      },
      startDate: {
        type: Date,
        required: true,
      },
      endDate: {
        type: Date,
        required: true,
      },
    },
  ],
  projects: [
    {
      title: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      technologiesUsed: [String],
      startDate: {
        type: Date,
        required: true,
      },
      endDate: {
        type: Date,
      },
    },
  ],
  certifications: [
    {
      title: {
        type: String,
        required: true,
      },
      organization: {
        type: String,
        required: true,
      },
      dateOfCompletion: {
        type: Date,
        required: true,
      },
      certificateLink: {
        type: String,
      },
    },
  ],
  patents: [
    {
      title: {
        type: String,
        required: true,
      },
      patentNumber: {
        type: String,
        required: true,
      },
      dateOfApproval: {
        type: Date,
        required: true,
      },
      description: {
        type: String,
      },
    },
  ],
  extraCurricularActivities: [
    {
      activityName: {
        type: String,
        required: true,
      },
      description: {
        type: String,
      },
      achievements: {
        type: String,
      },
    },
  ],
});

export const Detail = mongoose.model("Detail", detailSchema);
