"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  Loader2,
  ArrowLeft,
  Search,
  LogOut,
  Eye,
  RotateCcw,
} from "lucide-react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { toast } from "sonner"; // ✅ Optional (if using Sonner or any toast lib)

const Registrations = () => {
  const [registrations, setRegistrations] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedRegistration, setSelectedRegistration] = useState(null);
  const [isRefunding, setIsRefunding] = useState(false);

  const itemsPerPage = 10;
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // ✅ Fetch all registrations
  useEffect(() => {
    const fetchRegistrations = async () => {
      try {
        const res = await axios.get("/api/register");
        const data = res.data.data || [];
        setRegistrations(data);
        setFilteredData(data);
      } catch (error) {
        console.error("Error fetching registrations:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchRegistrations();
  }, []);

  // ✅ Search Filter
  useEffect(() => {
    const lowerSearch = search.toLowerCase();
    const filtered = registrations.filter(
      (r) =>
        r.applicant_name.toLowerCase().includes(lowerSearch) ||
        r.email.toLowerCase().includes(lowerSearch) ||
        r.phone.includes(lowerSearch) ||
        r.city.toLowerCase().includes(lowerSearch)
    );
    setFilteredData(filtered);
    setCurrentPage(1);
  }, [search, registrations]);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  // ✅ Logout
  const handleLogout = async () => {
    try {
      await axios.post("/admin/logout");
      window.location.href = "/admin/login";
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  // ✅ Refund Payment
  const handleRefund = async (registrationId) => {
    setIsRefunding(true);
    try {
      const res = await axios.post(`/api/registration/${registrationId}/refund`);
      if (res.data.success) {
        toast.success("Refund processed successfully!");
        // Refresh data
        const updatedList = registrations.map((item) =>
          item.id === registrationId
            ? {
                ...item,
                payment: { ...item.payment, status: "refunded" },
              }
            : item
        );
        setRegistrations(updatedList);
        setFilteredData(updatedList);
      } else {
        toast.error(res.data.message || "Refund failed!");
      }
    } catch (error) {
      console.error("Refund error:", error);
      toast.error("Refund failed! Please check logs.");
    } finally {
      setIsRefunding(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <h2 className="text-2xl font-bold tracking-tight text-gray-800">
            Registrations List
          </h2>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-500" />
              <Input
                type="text"
                placeholder="Search name, email, city..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-9"
              />
            </div>

            <Button
              variant="outline"
              onClick={() => (window.location.href = "/")}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </Button>

            <Button
              variant="destructive"
              onClick={handleLogout}
              className="flex items-center gap-2"
            >
              <LogOut className="w-4 h-4" />
              Logout
            </Button>
          </div>
        </div>

        {/* Table Card */}
        <Card className="shadow-sm min-h-screen border border-gray-200">
          <CardContent className="p-4 sm:p-6 overflow-x-auto">
            {loading ? (
              <div className="flex justify-center py-10">
                <Loader2 className="w-6 h-6 animate-spin text-gray-600" />
              </div>
            ) : filteredData.length === 0 ? (
              <p className="text-center text-gray-500 py-6">
                No registrations found.
              </p>
            ) : (
              <>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>ID</TableHead>
                      <TableHead>Applicant Name</TableHead>
                      <TableHead>Phone</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>City</TableHead>
                      <TableHead>Payment Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {paginatedData.map((row) => (
                      <TableRow key={row.id}>
                        <TableCell>{row.id}</TableCell>
                        <TableCell>{row.applicant_name}</TableCell>
                        <TableCell>{row.phone}</TableCell>
                        <TableCell>{row.email}</TableCell>
                        <TableCell>{row.city}</TableCell>
                        <TableCell>
                          <span
                            className={`px-2 py-1 text-xs rounded-full ${
                              row.payment?.status === "refunded"
                                ? "bg-green-100 text-green-600"
                                : row.payment?.status === "pending"
                                ? "bg-yellow-100 text-yellow-700"
                                : "bg-gray-100 text-gray-700"
                            }`}
                          >
                            {row.payment?.status || "N/A"}
                          </span>
                        </TableCell>
                        <TableCell>
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button
                                size="sm"
                                variant="outline"
                                className="flex items-center gap-1"
                                onClick={() => setSelectedRegistration(row)}
                              >
                                <Eye className="w-4 h-4" /> View
                              </Button>
                            </DialogTrigger>

                            <DialogContent className="min-w-2xl max-h-[90vh] overflow-auto">
                              <DialogHeader>
                                <DialogTitle>
                                  Registration Details
                                </DialogTitle>
                                <DialogDescription>
                                  Full details of the registration and payment.
                                </DialogDescription>
                              </DialogHeader>

                              <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
                                {selectedRegistration &&
                                  Object.entries(selectedRegistration).map(
                                    ([key, value]) => {
                                      if (key === "payment" && value) {
                                        return (
                                          <div key={key} className="col-span-2">
                                            <span className="font-semibold">
                                              Payment Details
                                            </span>
                                            <div className="grid grid-cols-2 gap-2 mt-2 border text-black border-gray-200 p-2 rounded bg-gray-50">
                                              <div className="font-medium">
                                                TXNID:
                                              </div>
                                              <div>{value.txnid}</div>
                                              <div className="font-medium">
                                                Amount:
                                              </div>
                                              <div>{value.amount}</div>
                                              <div className="font-medium">
                                                Status:
                                              </div>
                                              <div>{value.status}</div>
                                            </div>
                                          </div>
                                        );
                                      } else if (key !== "payment") {
                                        return (
                                          <React.Fragment key={key}>
                                            <div className="font-medium">
                                              {key}:
                                            </div>
                                            <div>{value?.toString() || "N/A"}</div>
                                          </React.Fragment>
                                        );
                                      }
                                    }
                                  )}
                              </div>

                              <div className="mt-6 flex justify-end gap-2">
                                {selectedRegistration?.payment?.status !==
                                  "refunded" && (
                                  <Button
                                    variant="outline"
                                    onClick={() =>
                                      handleRefund(selectedRegistration.id)
                                    }
                                    disabled={isRefunding}
                                    className="flex items-center gap-2"
                                  >
                                    {isRefunding ? (
                                      <>
                                        <Loader2 className="w-4 h-4 animate-spin" />
                                        Processing...
                                      </>
                                    ) : (
                                      <>
                                        <RotateCcw className="w-4 h-4" />
                                        Refund
                                      </>
                                    )}
                                  </Button>
                                )}
                                <Button
                                  onClick={() => setSelectedRegistration(null)}
                                >
                                  Close
                                </Button>
                              </div>
                            </DialogContent>
                          </Dialog>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </>
            )}
          </CardContent>

          {/* Pagination */}
          <CardFooter>
            <div className="mt-6 flex justify-center">
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious
                      onClick={() => handlePageChange(currentPage - 1)}
                      className={`cursor-pointer ${
                        currentPage === 1
                          ? "pointer-events-none opacity-50"
                          : ""
                      }`}
                    />
                  </PaginationItem>

                  {[...Array(totalPages)].map((_, i) => (
                    <PaginationItem key={i}>
                      <PaginationLink
                        onClick={() => handlePageChange(i + 1)}
                        isActive={currentPage === i + 1}
                      >
                        {i + 1}
                      </PaginationLink>
                    </PaginationItem>
                  ))}

                  <PaginationItem>
                    <PaginationNext
                      onClick={() => handlePageChange(currentPage + 1)}
                      className={`cursor-pointer ${
                        currentPage === totalPages
                          ? "pointer-events-none opacity-50"
                          : ""
                      }`}
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Registrations;
