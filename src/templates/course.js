import React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Layout from "../components/layout";
import SEO from "../components/seo";

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        course_number
        course_name
        level
        video
        slide
        assignment
        exam
      }
      body
    }
  }
`;

const CourseTemplate = ({ data: { mdx: course } }) => {
  const title =
    course.frontmatter.course_number + " " + course.frontmatter.course_name;
  return (
    <Layout>
      <SEO title={title} />
      <h1>{title}</h1>
      <MDXRenderer>{course.body}</MDXRenderer>
    </Layout>
  );
};

export default CourseTemplate;
