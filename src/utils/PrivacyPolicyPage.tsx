import Footer from "../components/Footer";
import Header from "../components/Header";

export default function PrivacyPolicyPage() {
  return (
    <div>
      <div className="fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-lg flex justify-center items-center h-[70px]">
        <Header />
      </div>
      <div className="flex justify-center text-4xl font-semibold mt-20">
        Privacy Policy
      </div>
      <div className="flex flex-col ml-120 mt-15">
        <div className="flex flex-col w-[50vw] mt-8">
          <div className="text-3xl font-semibold">Effective Date</div>
          <div className="text-sm font-semibold text-gray-800 mt-2">
            18 March 2025
          </div>
        </div>
        <div className="flex flex-col w-[50vw] mt-8">
          <div className="text-3xl font-semibold">Introduction</div>
          <div className="text-sm font-semibold text-gray-800 mt-2">
            At Folio ("we," "our," or "us"), we understand the importance of
            protecting your privacy and the security of your business
            information. This Privacy Policy explains how we collect, use,
            store, and safeguard the information you provide when you use our
            mobile application (the "App") and the related services.
          </div>
        </div>
        <div className="flex flex-col w-[50vw] mt-8">
          <div className="text-3xl font-semibold">
            1. Information We Collect
          </div>
          <div className="text-sm font-semibold text-gray-800 mt-2 ml-7">
            <div>
              * Business Account Information: When you register for an account,
              we collect details about your company, such as your business name,
              registration information, and business address. In addition, we
              gather your user account information—including your name, email
              address, and phone number—as well as authentication credentials
              (which may include details from social media logins).
            </div>
            <div>
              * Product Information: Folio enables you to showcase your
              products, so we collect product images and videos, along with
              descriptions, specifications, pricing details, product categories,
              and associated metadata. We also keep historical catalog data and
              track any changes you make over time.
            </div>
            <div>
              * AI-Generated Content: Our platform leverages artificial
              intelligence to enhance your product listings. In this process, we
              collect AI-processed product images (including versions with
              cleaned or replaced backgrounds), AI-generated product
              descriptions and specifications, and AI-created marketing
              materials and social media content. We may also derive anonymized
              training data from your usage to improve our services.
            </div>
            <div>
              * Technical Data: To ensure optimal performance, we collect
              technical information such as your device ID, operating system,
              and browser type, as well as usage data that reflects which
              features you access and how you interact with the App.
              Additionally, we log your IP address, location data, and
              performance/error information.
            </div>
            <div>
              * Social Media Integration Data: If you connect your social media
              accounts to Folio, we collect relevant account details, posting
              history, engagement metrics, and authentication tokens to
              facilitate seamless sharing and analysis.
            </div>
          </div>
          <div className="flex flex-col w-[50vw] mt-8">
            <div className="text-3xl font-semibold">
              2. How We Use Your Information
            </div>
            <div className="text-sm font-semibold text-gray-800 mt-2">
              Your information is used primarily to provide and improve our core
              services. We manage your product catalogs and storefronts, process
              and enhance your product images, generate compelling product
              descriptions and marketing content, and facilitate connections
              with your B2B clients. In addition, your data is employed to train
              and refine our AI systems for product recognition, image
              enhancement, and marketing content generation. We also analyze
              usage patterns to troubleshoot issues, develop new features, and
              communicate service updates, notifications, and support messages.
              With your consent, we may also send you marketing communications.
            </div>
          </div>
          <div className="flex flex-col w-[50vw] mt-8">
            <div className="text-3xl font-semibold">3. Information Sharing</div>
            <div className="text-sm font-semibold text-gray-800 mt-2">
              We share your information only as necessary to deliver our
              services and improve your experience. For example, your product
              catalog, company profile, and transaction history may be visible
              to your B2B clients through private or public storefronts. In
              addition, we work with trusted service providers—including cloud
              storage, AI processing, analytics, and payment processors—to
              support our operations. When you choose to share content on social
              media, we exchange information with those platforms for
              authentication, analytics, and engagement tracking. Finally, we
              may disclose your information if required to comply with legal
              obligations, protect our rights, or prevent abuse.
            </div>
          </div>
          <div className="flex flex-col w-[50vw] mt-8">
            <div className="text-3xl font-semibold">
              4. Data Security and Retention
            </div>
            <div className="text-sm font-semibold text-gray-800 mt-2">
              We are committed to protecting your data through robust security
              measures. All data transmitted via our App is protected by strong
              encryption protocols (TLS), and we store your information securely
              in Microsoft Azure cloud with regular backups and strict access
              controls. We conduct regular security audits and updates to
              safeguard your data. In terms of retention, active account data is
              kept as long as your account is active, while data associated with
              closed accounts is deleted within 30 days. Backup data may be
              retained for up to 90 days, and anonymized data may be stored
              indefinitely for analytical purposes.
            </div>
          </div>
          <div className="flex flex-col w-[50vw] mt-8">
            <div className="text-3xl font-semibold">
              5. Your Rights and Choices
            </div>
            <div className="text-sm font-semibold text-gray-800 mt-2">
              You have the ability to manage your personal and business
              information directly through the App. You may access, update, or
              correct your data, request its deletion or export, and close your
              account if desired. Additionally, you can control your
              communication preferences by opting out of marketing
              communications or adjusting notification settings. With regard to
              AI features, while some AI functionality is integral to our core
              service, you maintain control over AI-generated content. You can
              edit or delete any AI-extracted product data during the creation
              process, and you have the right to delete AI-generated visual
              content (including images, videos, and other media) at any time.
              These controls ensure you maintain ownership over how your
              products are represented in the App.
            </div>
          </div>
          <div className="flex flex-col w-[50vw] mt-8">
            <div className="text-3xl font-semibold">
              6. International Data Transfers
            </div>
            <div className="text-sm font-semibold text-gray-800 mt-2">
              Because our services operate globally, your data may be
              transferred internationally for processing and storage. We ensure
              that appropriate safeguards are in place by using standard
              contractual clauses, data processing agreements, and by complying
              with international privacy frameworks.
            </div>
          </div>
          <div className="flex flex-col w-[50vw] mt-8">
            <div className="text-3xl font-semibold">
              7. Changes to This Policy
            </div>
            <div className="text-sm font-semibold text-gray-800 mt-2">
              We may update this Privacy Policy periodically to reflect changes
              in our practices or applicable laws. In the event of significant
              changes, we will notify you via in-app notifications, email, or
              announcements on our website. Your continued use of our services
              following any such changes constitutes your acceptance of the
              updated policy.
            </div>
          </div>
          <div className="flex flex-col w-[50vw] mt-8">
            <div className="text-3xl font-semibold">8. Contact Us</div>
            <div className="text-sm font-semibold text-gray-800 mt-2">
              If you have any questions or concerns regarding this Privacy
              Policy, please contact us by email at info@quantuslabs.ai or via
              our in-app help center.
            </div>
          </div>
        </div>
        <div className="flex justify-end px-30">
          <img src="bookademopic.png" />
        </div>
      </div>
      <Footer />
    </div>
  );
}
