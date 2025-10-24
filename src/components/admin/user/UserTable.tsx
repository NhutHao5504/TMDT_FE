'use client'

import React from 'react'
import * as ScrollArea from '@radix-ui/react-scroll-area'
import { Pencil, Trash2, RotateCcw } from 'lucide-react'

export default function UserTable({ users, onEdit, onDelete, onRestore }: any) {
  return (
    <div className="w-full rounded-lg shadow-lg border border-gray-200 bg-white">
      <ScrollArea.Root className="w-full h-[600px] rounded-lg">
        <ScrollArea.Viewport className="w-full h-full">
          <table className="min-w-full table-auto">
            <thead className="bg-indigo-100 text-gray-800">
              <tr>
                <th className="px-3 py-4 text-left text-xs font-semibold uppercase tracking-wide">Tên</th>
                <th className="px-3 py-4 text-left text-xs font-semibold uppercase tracking-wide">Email</th>
                <th className="px-3 py-4 text-left text-xs font-semibold uppercase tracking-wide">SĐT</th>
                <th className="px-3 py-4 text-left text-xs font-semibold uppercase tracking-wide">Vai trò</th>
                <th className="px-3 py-4 text-left text-xs font-semibold uppercase tracking-wide">Trạng thái</th>
                <th className="px-3 py-4 text-center text-xs font-semibold uppercase tracking-wide">Hành động</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {users.map((u: any, idx: number) => (
                <tr
                  key={u._id}
                  className={`transition hover:bg-indigo-50 ${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
                >
                  <td className="px-6 py-3 text-gray-700 whitespace-nowrap">{u.name}</td>
                  <td className="px-6 py-3 text-gray-600 whitespace-nowrap">{u.email}</td>
                  <td className="px-6 py-3 text-gray-600 whitespace-nowrap">{u.phone || '-'}</td>
                  <td className="px-6 py-3 whitespace-nowrap">
                    {u.roles?.map((r: string, i: number) => (
                      <span
                        key={i}
                        className={`inline-block px-2 py-1 text-xs font-medium rounded-full mr-1 ${
                          r === 'admin'
                            ? 'bg-blue-100 text-blue-700'
                            : r === 'customer'
                            ? 'bg-green-100 text-green-700'
                            : 'bg-gray-100 text-gray-700'
                        }`}
                      >
                        {r}
                      </span>
                    ))}
                  </td>
                  <td className="px-6 py-3 whitespace-nowrap">
                    <span
                      className={`inline-block px-2 py-1 text-xs rounded-full font-medium ${
                        u.status === 'active'
                          ? 'bg-green-100 text-green-700'
                          : u.status === 'blocked'
                          ? 'bg-yellow-100 text-yellow-700'
                          : u.status === 'deleted'
                          ? 'bg-red-100 text-red-700'
                          : 'bg-gray-100 text-gray-700'
                      }`}
                    >
                      {u.status}
                    </span>
                  </td>
                  <td className="px-6 py-3 flex justify-center gap-2 whitespace-nowrap">
                    {u.status !== 'deleted' ? (
                      <>
                        <button
                          onClick={() => onEdit(u)}
                          className="p-2 rounded-md hover:bg-blue-100 text-blue-600 transition"
                        >
                          <Pencil size={18} />
                        </button>
                        <button
                          onClick={() => onDelete(u._id)}
                          className="p-2 rounded-md hover:bg-red-100 text-red-600 transition"
                        >
                          <Trash2 size={18} />
                        </button>
                      </>
                    ) : (
                      <button
                        onClick={() => onRestore(u._id)}
                        className="p-2 rounded-md hover:bg-green-100 text-green-600 transition"
                      >
                        <RotateCcw size={18} />
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </ScrollArea.Viewport>

        <ScrollArea.Scrollbar
          orientation="vertical"
          className="flex select-none touch-none w-2 bg-gray-200 rounded-full"
        >
          <ScrollArea.Thumb className="flex-1 bg-gray-400 rounded-full" />
        </ScrollArea.Scrollbar>

        <ScrollArea.Scrollbar
          orientation="horizontal"
          className="flex select-none touch-none h-2 bg-gray-200 rounded-full"
        >
          <ScrollArea.Thumb className="flex-1 bg-gray-400 rounded-full" />
        </ScrollArea.Scrollbar>
      </ScrollArea.Root>
    </div>
  )
}
